import { dummyData } from '@/app/data/device-data';
import { ProgramService } from '@/app/services/program.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  groupNumbers: number[] = [];
  constructor(private programService: ProgramService) {

  }

  ngOnInit() {
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

  confirmStartProgram(selectedProgram: any) {
    console.log(`Start ${selectedProgram.name} at group ${this.selectedGroup}`);
    this.programService.setSelectedPrograms([{
      ...selectedProgram,
      status: "Running"
    }]);

    const modalElement = document.getElementById('confirmWateringModal') as HTMLElement;
    const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
    this.init();
    setTimeout(() => {
      const currentProgram = this.programService.getSelectedPrograms()?.find(p => p.id === selectedProgram.id);
      if (currentProgram) {
        currentProgram.status = "Stopped";
        this.programService.setSelectedPrograms([currentProgram]);
        this.init();
      }
    }, 5000);
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
}
