import { dummyData } from '@/app/data/device-data';
import { ProgramService } from '@/app/services/program.service';
import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  imports: [CommonModule, FormsModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  programs: { id: string, name: string, status: string }[] = [];
  selectedProgram: any;
  selectedGroup: number = 1;
  selectedValue = 1; // default to 01
  itemHeight = 40;
  visibleCount = 3;
    groupNumbers: number[] = [];
    @ViewChild('pickerContainer') pickerContainer!: ElementRef<HTMLDivElement>;
    private scrollTimeout: any;
  constructor(
    private programService: ProgramService,
    private router: Router,
    private sharedProgramService: SharedProgramService,
  ) { }

  ngAfterViewInit() {
    // Scroll to default selected (01)
    this.scrollToIndex(this.selectedGroup);
  }

  scrollToIndex(index: number) {
    const scrollTop = (index + 1) * this.itemHeight; // +1 for spacer
    this.pickerContainer.nativeElement.scrollTop = scrollTop;
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    this.moveSelection(direction);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.moveSelection(1);
    } else if (event.key === 'ArrowUp') {
      this.moveSelection(-1);
    }
  }

  moveSelection(delta: number) {
    const newIndex = this.selectedGroup + delta;
    if (newIndex >= 0 && newIndex < this.groupNumbers.length) {
      this.selectedGroup = newIndex;
      this.scrollToIndex(newIndex);
    }
  }

  ngOnInit() {
    this.programService.stopSignal$.subscribe((stop) => {
      if (stop) {
        this.stopCurrentExecution();
      }
    });
    this.init();
    const device = dummyData.Devices.Items['MPG101'];
    const stationGroupItems = device.Programs.Items[1].StationGroups.Items;
    this.groupNumbers = Object.keys(stationGroupItems).map(key => Number(key));
  }

  init() {
    console.log("Initalize program component")
    const device = dummyData.Devices.Items['MPG101'];
    const programsMeta = device.MetaData.Device.Programs.Items;
    const ProgramStatus = device.Programs.Items;
    this.selectedProgram = this.programService.getSelectedPrograms() ?? [];
    this.programs = Object.keys(programsMeta).map(key => {
      const selectedProgram = this.selectedProgram?.find((s: any) => s.id === key);
      return {
        id: key,
        name: programsMeta[key].Name,
        status: selectedProgram?.status || ProgramStatus[key]?.Status?.Value || 'Unknown',
      };
    });
  }
  isProgramRunning(program: any): boolean {
    return program.status?.toLowerCase() === 'running';
  }
  confirmStartProgram(selectedProgram: any) {
    console.log(`Start ${selectedProgram.name} at group ${this.selectedGroup}`);

    const currentPrograms = this.programService.getSelectedPrograms() ?? [];
    const existingIndex = currentPrograms.findIndex(p => p.id === selectedProgram.id);
    if (existingIndex !== -1) {
      currentPrograms[existingIndex].status = "Running";
    } else {
      currentPrograms.push({
        ...selectedProgram,
        status: "Running"
      });
    }
    this.programService.setSelectedPrograms(currentPrograms);
    this.programService.setShowStopButton(true);
    const modalElement = document.getElementById('confirmWateringModal') as HTMLElement;
    const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
    this.init();
  }

  stopCurrentExecution() {
    const currentProgram = this.programService.getSelectedPrograms();
    if (currentProgram) {
      currentProgram.forEach(e => e.status = "Stopped");
      this.programService.setSelectedPrograms([currentProgram]);
      this.init();
    }
  }

  startProgram(programName: any) {
    this.selectedProgram = programName;
    const modalElement = document.getElementById('confirmWateringModal') as HTMLElement;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }

  selectGroup(num: number) {
    this.selectedGroup = num;
  }

  open(program: any) {
    const slug = this.slugify(program.name);
    this.sharedProgramService.setProgram(program);
    this.router.navigate(['programs', slug]);
  }
  
  slugify(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

}
