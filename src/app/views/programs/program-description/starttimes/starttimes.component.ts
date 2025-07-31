import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StationService } from '@/app/services/station.service';
import { UnsavedChanges } from '@/app/models/unsaved-changes';
import { TimerComponent } from '@/app/utils/timer/timer.component';

@Component({
  selector: 'app-starttimes',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule,TimerComponent],
  templateUrl: './starttimes.component.html',
  styleUrl: './starttimes.component.scss'
})

export class StarttimesComponent implements UnsavedChanges {
  program: any;
  days: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'];
  selectedDays: boolean[] = new Array(14).fill(false);
  hasUnsavedChanges: boolean = false;
  currentCycleDay: number = 1;
  openPopup = false;
  selectedTimeDisplay = '00:00';
  selectedHour: number = 0;
  selectedMinute: number = 0;
  selectedTimeIndex: number = -1;

  originalStartTimes: any[] = [];
  originalSelectedDays: boolean[] = [];


  startTimes = [
    { label: 'Set Time of Day 1:', time: '00:00', enabled: true },
    { label: 'Set Time of Day 2:', time: '00:00', enabled: true },
    { label: 'Set Time of Day 3:', time: '00:00', enabled: true },
    { label: 'Set Time of Day 4:', time: '00:00', enabled: true },
    { label: 'Set Time of Day 5:', time: '00:00', enabled: true },
  ];

  constructor(
    private router: Router,
    private sharedProgramService: SharedProgramService,
    private stationService: StationService

  ) { }

  private convertMinutesToTime(minutes: number): string {
    const hrs = Math.floor(minutes / 60).toString().padStart(2, '0');
    const mins = (minutes % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}`;
  }

  private convertToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  async ngOnInit() {
    this.program = this.sharedProgramService.getProgram();
    this.currentCycleDay = this.getSystemCurrentDay();

    const programId = this.getProgramIdFromName(this.program?.name);

    const deviceData = await this.stationService.getDeviceData();
    const programData = deviceData?.Devices?.Items?.MPG101?.Programs?.Items?.[programId];

    if (programData) {
      const local = localStorage.getItem('savedStartTimes_' + programId);
      const saved = local ? JSON.parse(local) : null;
      
      if (saved && saved.programId === programId) {
        this.startTimes = saved.startTimes;
        this.selectedDays = saved.selectedDays;
      
        this.originalStartTimes = JSON.parse(JSON.stringify(this.startTimes));
        this.originalSelectedDays = [...this.selectedDays];
      } else {
        this.patchStartTimes(programData.StartConditions?.Items || {});
        this.selectedDays = programData.DayTable || new Array(14).fill(false);
      
        this.originalStartTimes = JSON.parse(JSON.stringify(this.startTimes));
        this.originalSelectedDays = [...this.selectedDays];
      }
      

      this.originalStartTimes = JSON.parse(JSON.stringify(this.startTimes));
      this.originalSelectedDays = [...this.selectedDays];
    }
  }

  confirmTime(event: { hour: string; minute: string }) {
    const formatted = `${event.hour}:${event.minute}`;
    if (this.selectedTimeIndex !== -1) {
      this.startTimes[this.selectedTimeIndex].time = formatted;
      if (formatted !== 'Off') {
        this.startTimes[this.selectedTimeIndex].enabled = true;
      }
      this.markUnsaved();
      this.saveToLocalStorage();
    }
    this.openPopup = false;
  }
  

  openTimePicker(index: number) {
    const time = this.startTimes[index].time;
    if (time !== 'Off') {
      const [hour, minute] = time.split(':').map(Number);
      this.selectedHour = hour;
      this.selectedMinute = minute;
    } else {
      this.selectedHour = 0;
      this.selectedMinute = 0;
    }
    this.selectedTimeIndex = index;
    this.openPopup = true;
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
   
    this.saveToLocalStorage();
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
    this.saveToLocalStorage();
    this.checkForChanges();

  }

  selectOdd(): void {
    this.selectedDays = this.selectedDays.map((_, i) => i % 2 === 0);
    this.saveToLocalStorage();
    this.checkForChanges();


  }

  selectEven(): void {
    this.selectedDays = this.selectedDays.map((_, i) => i % 2 !== 0);
    this.saveToLocalStorage();
    this.checkForChanges();


  }

  clearSelection(): void {
    this.selectedDays = new Array(14).fill(false);
    this.saveToLocalStorage();
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
      time.time = time.previousTime|| '00:00';;
    }
    this.saveToLocalStorage();
    this.checkForChanges();

  }

  saveStartTimes() {
    const savedData = this.startTimes.map((item) => ({
      label: item.label,
      enabled: item.enabled,
      startTimeInMinutes: item.enabled ? this.convertToMinutes(item.time) : null,
    }));

    this.checkForChanges();

  }

  markChangesSaved() {
    this.hasUnsavedChanges = false;
    this.originalStartTimes = JSON.parse(JSON.stringify(this.startTimes));
    this.originalSelectedDays = [...this.selectedDays];
    this.sharedProgramService.setStartTimesChanged(false);
  }

  hasChanges(): boolean {
    this.checkForChanges();
    return this.hasUnsavedChanges;
  }

  saveToLocalStorage() {
    const programId = this.getProgramIdFromName(this.program?.name);
    const dataToSave = {
      programId,
      startTimes: this.startTimes.map(item => ({
        label: item.label,
        enabled: item.enabled,
        time: item.time,
      })),
      selectedDays: this.selectedDays,
    };
    localStorage.setItem('savedStartTimes_' + programId, JSON.stringify(dataToSave));
  }
  

}