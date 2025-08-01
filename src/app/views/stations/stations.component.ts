import { dummyData } from '@/app/data/device-data';
import { ProgramService } from '@/app/services/program.service';
import { StationService } from '@/app/services/station.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent {
  @Input() isPopup: boolean = false;
  data = Object.values(dummyData);
  selectedStations: any[] = [];
  stations: { id: string, name: string, status: string, selected?: boolean, pumps?: [] }[] = [];
  constructor(private router: Router, private stationService: StationService, private programService: ProgramService) {

  }
  ngOnInit() {
    this.selectedStations = [];
    this.programService.stopSignal$.subscribe((stop) => {
      if (stop) {
        this.stations.forEach(station => {
          if (station.status === 'Running') {
            station.status = 'Stopped';
          }
        });
        this.selectedStations = [];
        this.programService.setSelectedPrograms([]);
      }
    });
    this.init();
  }
  toggleSelection(station: any): void {
    station.selected = !station.selected;
  }
  async init() {
    let resp = await this.stationService.getDeviceData();
    this.selectedStations = this.stationService.getSelectedStations() ?? [];
    const device = resp.Devices.Items['MPG101'];
    const stationMeta = device.MetaData.Device.Stations.Items;
    const stationStatus = device.Stations.Items;
    const pumps = device.MetaData.Device.Pumps;
    const programStation = this.programService.getSelectedPrograms();

    this.stations = Object.keys(stationMeta).map((key, index) => {
      const selectedStation = this.selectedStations?.find(s => s.id === key);
      let status = selectedStation?.status || stationStatus[key]?.Status?.Value;
      if (programStation?.length > 0 && index === 0) {
        status = 'Running';
      }
      return {
        id: key,
        name: stationMeta[key].Name,
        status: status,
        selected: selectedStation?.selected ?? false,
        pumps
      };
    });
  }

  startWatering() {
    const selectedStations = this.stations.filter((s) => s.selected);
    console.log('Starting watering for:', selectedStations);
    this.stationService.setSelectedStations(selectedStations);
    this.router.navigate(['stations', 'watering-timer']);
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

  stopWatering() {
    this.selectedStations.forEach(station => {
      station.status = 'Stopped';
    });
    this.stations.forEach(station => {
      if (this.selectedStations.find(s => s.id === station.id)) {
        station.status = 'Stopped';
      }
    });
    this.selectedStations = [];
    this.stationService.setSelectedStations(this.selectedStations);
  }
}
