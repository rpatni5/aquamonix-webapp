import { dummyData } from '@/app/data/device-data';
import { DeviceDataService } from '@/app/services/station.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stations',
  imports: [CommonModule, FormsModule],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss'
})
export class StationsComponent {
  data = Object.values(dummyData)
  stations: { id: string, name: string, status: string, selected?: boolean }[] = [];
  constructor(private deiceDataService: DeviceDataService) {

  }
  ngOnInit() {
    this.init();
  }
  async init() {
    let resp = await this.deiceDataService.getDeviceData();
    const device = resp.Devices.Items['MPG101'];
    const stationMeta = device.MetaData.Device.Stations.Items;
    const stationStatus = device.Stations.Items;

    this.stations = Object.keys(stationMeta).map(key => {
      return {
        id: key,
        name: stationMeta[key].Name,
        status: stationStatus[key]?.Status?.Value || 'Unknown',
        selected: false
      };
    });
  }
  startWatering() {
    const selectedStations = this.stations.filter((s) => s.selected);
    console.log('Starting watering for:', selectedStations);
  }
  hasSelectedStations(): boolean {
    return this.stations.some(s => s.selected);
  }
  toggleSelectAll(checked: boolean): void {
    this.stations.forEach(station => station.selected = checked);
  }

  areAllSelected(): boolean {
    return this.stations.length > 0 && this.stations.every(station => station.selected);
  }

  getSelectedCount(): number {
    return this.stations.filter(station => station.selected).length;
  }

}
