import { dummyData } from '@/app/data/device-data';
import { DeviceDataService } from '@/app/services/station.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-watering-timer',
  imports: [FormsModule, CommonModule],
  templateUrl: './watering-timer.component.html',
  styleUrl: './watering-timer.component.scss'
})
export class WateringTimerComponent {
  pumps: { pumpId: string, type: string, name: string, mode: string, selected?: boolean }[] = [];
  selectedTime: any;
  constructor(private stationService: DeviceDataService,) {

  }
  ngOnInit() {
    const device = dummyData.Devices.Items['MPG101'];
    const pumpData = device.MetaData.Device.Pumps.Items;
    this.pumps = Object.entries(pumpData).map(([pumpId, pump]) => ({
      pumpId: pumpId,
      type: pump.Type,
      mode: pump.Mode,
      name: pump.Name,
      selected: false
    }));
    console.log(this.pumps)
  }
  selectedStations: any[] = [];

  confirmWatering() {
    const modalElement = document.getElementById('confirmWateringModal') as HTMLElement;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }

  confirmStartWatering() {
    console.log('Confirmed watering for:', this.selectedStations);
    const modalElement = document.getElementById('confirmWateringModal')!;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal?.hide();
  }

}
