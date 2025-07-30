import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StationService } from '@/app/services/station.service';
@Component({
  selector: 'app-starttimes',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './starttimes.component.html',
  styleUrl: './starttimes.component.scss'
})
export class StarttimesComponent {
  program: any;
  days: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'];
  selectedDays: boolean[] = new Array(14).fill(false);
  hasUnsavedChanges: boolean = false;
  currentCycleDay: number = 1;

  originalStartTimes: any[] = [];
originalSelectedDays: boolean[] = [];


  startTimes = [
    { label: 'Set Time of Day 1:', time: '00:00', enabled: true },
    { label: 'Set Time of Day 2:', time: '00:00', enabled: true },
    { label: 'Set Time of Day 3:', time: '00:00', enabled: true },
    { label: 'Set Time of Day 4:', time: '00:00', enabled: true },
    { label: 'Set Time of Day 5:', time: '00:00', enabled: true },
  ];

  private convertMinutesToTime(minutes: number): string {
    const hrs = Math.floor(minutes / 60).toString().padStart(2, '0');
    const mins = (minutes % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}`;
  }

  constructor(
    private router: Router,
    private sharedProgramService: SharedProgramService,
    private stationService: StationService

  ) { }

  async ngOnInit() {
    this.program = this.sharedProgramService.getProgram();
    this.currentCycleDay = this.getSystemCurrentDay();

    const programId = this.getProgramIdFromName(this.program?.name);

    const deviceData = await this.stationService.getDeviceData();
    const programData = deviceData?.Devices?.Items?.MPG101?.Programs?.Items?.[programId];

    if (programData) {
      this.patchStartTimes(programData.StartConditions?.Items || {});
      this.selectedDays = programData.DayTable || new Array(14).fill(false);

      this.originalStartTimes = JSON.parse(JSON.stringify(this.startTimes));
      this.originalSelectedDays = [...this.selectedDays];
    }
  }

  checkForChanges() {
    const startTimesChanged = this.startTimes.some((startTime, i) => {
      const original = this.originalStartTimes[i];
      return (
        startTime.time !== original.time ||
        startTime.enabled !== original.enabled
      );
    });
  
    const daysChanged = this.selectedDays.some((val, i) => val !== this.originalSelectedDays[i]);
  
    const hasChanged = startTimesChanged || daysChanged;
  
    this.hasUnsavedChanges = hasChanged;
    this.sharedProgramService.setStartTimesChanged(hasChanged);
  }
  

  getProgramIdFromName(name: string): string {
    const match = name?.match(/\d+$/);
    return match ? match[0] : '1';
  }

  patchStartTimes(startConditions: any): void {
    this.startTimes = [];

    Object.keys(startConditions).forEach((key, index) => {
      const condition = startConditions[key];
      if (condition.Type === 'Time') {
        let time = condition.StartTimeInMinutes;

        if (!isNaN(Number(time))) {
          time = this.convertMinutesToTime(Number(time));
        }

        this.startTimes.push({
          label: `Set Time of Day ${index + 1}:`,
          time: time,
          enabled: condition.Enabled,
        });
      }
    });
  }

  getSystemCurrentDay(): number {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    let currentDay = (year - 1996) * 365;

    const monthOffsets: any = {
      1: 0, 2: 31, 3: 59, 4: 90, 5: 120, 6: 151,
      7: 181, 8: 212, 9: 243, 10: 273, 11: 304, 12: 334
    };

    currentDay += monthOffsets[month] || 0;
    currentDay += day;
    currentDay += Math.floor((year - 1996) / 4) + 1;

    if (year % 4 === 0 && month < 3) {
      currentDay -= 1;
    }

    return (currentDay % 14) + 1;
  }


  toggleDay(index: number): void {
    this.selectedDays[index] = !this.selectedDays[index];
    this.checkForChanges();
  }
  isSelected(index: number): boolean {
    return this.selectedDays[index];
  }

  isCurrentDay(index: number): boolean {
    return this.currentCycleDay === index + 1;
  }

  selectAll(): void {
    this.selectedDays = new Array(14).fill(true);
    this.checkForChanges();
  }

  selectOdd(): void {
    this.selectedDays = this.selectedDays.map((_, i) => i % 2 === 0);
    this.checkForChanges();
  }

  selectEven(): void {
    this.selectedDays = this.selectedDays.map((_, i) => i % 2 !== 0);
    this.checkForChanges();
  }

  clearSelection(): void {
    this.selectedDays = new Array(14).fill(false);
    this.checkForChanges();
  }

  markUnsaved() {
    this.checkForChanges();
  }

  onToggleEnabled(time: any) {
    this.markUnsaved();

    if (!time.enabled) {
      time.previousTime = time.time;
      time.time = 'Off';
    } else if (time.time === 'Off' && time.previousTime) {
      time.time = time.previousTime;
    }
  }

  saveStartTimes() {
    const savedData = this.startTimes.map((item) => ({
      label: item.label,
      enabled: item.enabled,
      startTimeInMinutes: item.enabled ? this.convertToMinutes(item.time) : null,
    }));

    console.log('Saved Start Times:', savedData);
    console.log('Selected Days:', this.selectedDays);

    this.checkForChanges();

  }

  private convertToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
}