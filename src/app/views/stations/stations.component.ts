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
  stations = [
    { name: 'Station 1 Description', status: 'Stopped', selected: false },
    { name: 'Station 2 Description', status: 'Stopped', selected: false },
    { name: 'Station 3 Description', status: 'Stopped', selected: false },
    { name: 'Station 4 Description', status: 'Stopped', selected: false },
    { name: 'Station 5 Description', status: 'Stopped', selected: false },
    { name: 'Station 6 Description', status: 'Stopped', selected: false },
    { name: 'Station 7 Description', status: 'Stopped', selected: false },
    { name: 'Station 8 Description', status: 'Stopped', selected: false },
  ];

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
