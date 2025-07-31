import { dummyData } from '@/app/data/device-data';
import { ProgramService } from '@/app/services/program.service';
import { StationService } from '@/app/services/station.service';
import { TimerComponent } from '@/app/utils/timer/timer.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import flatpickr from "flatpickr";

@Component({
  selector: 'app-watering-timer',
  imports: [FormsModule, CommonModule, RouterModule, TimerComponent],
  templateUrl: './watering-timer.component.html',
  styleUrl: './watering-timer.component.scss'
})
export class WateringTimerComponent {
  pumps: { pumpId: string, type: string, name: string, mode: string, selected?: boolean }[] = [];
  selectedTime: any;
  selectedStations: any[] = [];
  openPopup = false;
  selectedTimeDisplay = '00:00';
  selectedHour: number = 0;
  selectedMinute: number = 0;
  constructor(private stationService: StationService, private router: Router, private programService: ProgramService) {

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
  
  confirmTime(event: any) {
    const hourStr = event.hour;
    const minStr = event.minute;
    this.selectedTimeDisplay = `${hourStr}:${minStr}`;
    console.log("selected watering time is:", this.selectedTimeDisplay);
    this.openPopup = false;
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
