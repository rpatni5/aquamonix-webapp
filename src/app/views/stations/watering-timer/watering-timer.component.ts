import { dummyData } from '@/app/data/device-data';
import { ProgramService } from '@/app/services/program.service';
import { StationService } from '@/app/services/station.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import flatpickr from "flatpickr";

@Component({
  selector: 'app-watering-timer',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './watering-timer.component.html',
  styleUrl: './watering-timer.component.scss'
})
export class WateringTimerComponent {
  pumps: { pumpId: string, type: string, name: string, mode: string, selected?: boolean }[] = [];
  selectedTime: any;
  selectedStations: any[] = [];
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);
  openPopup = false;
  selectedTimeDisplay = '00:00';

  selectedHour: number = 0;
  selectedMinute: number = 0;
  constructor(private stationService: StationService, private router: Router, private programService: ProgramService) {

  }
  confirmTime() {
    const hourStr = this.selectedHour.toString().padStart(2, '0');
    const minStr = this.selectedMinute.toString().padStart(2, '0');
    this.selectedTimeDisplay = `${hourStr}:${minStr}`;
    console.log("selected watering time is:", this.selectedTimeDisplay);
    this.openPopup = false;
  }
  ngAfterViewInit() {
    flatpickr("#customTimepicker", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true,
      defaultHour: 0,
      defaultMinute: 0,
      minuteIncrement: 1
    });
  }
  ngOnInit() {
    const device = dummyData.Devices.Items['MPG101'];
    const pumpData = device.MetaData.Device.Pumps.Items;
    this.pumps = Object.entries(pumpData).map(([pumpId, pump]) => ({
      pumpId: pumpId,
      type: pump.Type,
      mode: pump.Mode,
      name: pump.Name,
      selected: true
    }));
  }
  onHourWheel(event: WheelEvent) {
    event.preventDefault();
    const currentIndex = this.hours.indexOf(this.selectedHour);
    const nextIndex = event.deltaY > 0 ? Math.min(this.hours.length - 1, currentIndex + 1) : Math.max(0, currentIndex - 1);
    this.selectedHour = this.hours[nextIndex];
  }
  onScrollHour(event: Event) {
    const element = event.target as HTMLElement;
    const index = Math.round(element.scrollTop / 40); 
    this.selectedHour = this.hours[index] ?? 0;
  }

  onScrollMinute(event: Event) {
    const element = event.target as HTMLElement;
    const index = Math.round(element.scrollTop / 40); 
    this.selectedMinute = this.minutes[index] ?? 0;
  }
 
  confirmWatering() {
    const modalElement = document.getElementById('confirmWateringModal') as HTMLElement;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }

  confirmStartWatering() {
    this.selectedStations = this.stationService.getSelectedStations();
    console.log('Confirmed watering for:', this.selectedStations);
    this.selectedStations.forEach(station => {
      station.status = 'Running';
    });
    this.programService.setShowStopButton(true);
    const modalElement = document.getElementById('confirmWateringModal') as HTMLElement;
    const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
    this.router.navigate(['/stations']);
  }

}
