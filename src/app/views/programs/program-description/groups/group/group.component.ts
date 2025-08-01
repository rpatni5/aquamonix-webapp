import { StationService } from '@/app/services/station.service';
import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { TimerComponent } from '@/app/utils/timer/timer.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StationsComponent } from '@views/stations/stations.component';

@Component({
  selector: 'app-group',
  imports: [RouterModule, CommonModule, FormsModule, TimerComponent, StationsComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})

export class GroupComponent {
  program: any;
  groupName: any;
  group: any;
  openPopup = false;
  selectedHour: number = 0;
  selectedMinute: number = 0;
  selectedTimeDisplay = '00:00';
  stations: { id: string, name: string, selected?: boolean }[] = [];
  selectedStations: any[] = [];
  renderedStations: { index: number; name: string; flow: number }[] = [];
  selectedRowIndex: number | null | undefined;
  showConfirmDialog = false;
  deleteIndex: number | null = null;
  waterBoost = 0;

  constructor(private stationService: StationService,
    private route: ActivatedRoute,
    private sharedProgramService: SharedProgramService) { }

  // ngOnInit() {
  //   this.program = this.sharedProgramService.getProgram()?.name;
  //   this.group = this.sharedProgramService.getGroup();
  //   this.groupName = `Group ${this.group.groupNumber}`;
  //   this.waterBoost = this.sharedProgramService.getCurrentWaterBoost();

  //   this.init();
  //   const stored = localStorage.getItem('selectedStations');
  //   if (stored) {
  //     try {
  //       const parsed = JSON.parse(stored);
  //       if (Array.isArray(parsed)) {
  //         this.renderedStations = parsed;
  //       } else {
  //         this.renderedStations = [];
  //       }
  //     } catch {
  //       this.renderedStations = [];
  //     }
  //   }

  // }

  ngOnInit() {
    this.program = this.sharedProgramService.getProgram()?.name;
    this.group = this.sharedProgramService.getGroup();
    this.groupName = `Group ${this.group.groupNumber}`;
    this.waterBoost = this.sharedProgramService.getCurrentWaterBoost();
  
    this.init();
  
    const key = 'stationGroupDataAll';
    const stored = localStorage.getItem(key);
  
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const groupData = parsed.Items?.[this.group.groupNumber];
        if (groupData) {
          const stations = groupData.Stations?.Items || {};
          this.renderedStations = Object.values(stations).map((station: any, index: number) => ({
            index: index + 1,
            name: station.Name,
            flow: station.ExpectedFlow
          }));
  
          this.selectedTimeDisplay = this.convertMinutesToHHMM(groupData.RuntTimeMinutes || 0);
        }
      } catch {
        this.renderedStations = [];
      }
    }
  }
  
  async init() {
    await this.loadStations();
  }

  async loadStations() {
    const resp = await this.stationService.getDeviceData();
    const device = resp.Devices.Items['MPG101'];
    const stationMeta = device.MetaData.Device.Stations.Items;

    this.stations = Object.keys(stationMeta).map((key) => ({
      id: key,
      name: stationMeta[key].Name,
      flow: stationMeta[key].ExpectedFlow,
      selected: false
    }));
  }

  private convertMinutesToHHMM(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  }


  get hasFlowData(): boolean {
    return this.safeRenderedStations.some(station => station.flow);
  }

  get totalFlowRate(): number {
    return this.safeRenderedStations.reduce((sum, station) => {
      const flow = Number(station.flow);
      return sum + (isNaN(flow) ? 0 : flow);
    }, 0);
  }


  openStationModal(): void {
    const modalElement = document.getElementById('stationModal') as HTMLElement;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }

  selectRow(index: number) {
    this.selectedRowIndex = index;
  }

  deleteStation(index: number) {
    const target = this.safeRenderedStations[index];
    if (!target) return;
    this.renderedStations = this.renderedStations.filter((station, i) => i !== index);
    this.selectedRowIndex = null;
  }

  confirmDelete(index: number) {
    this.deleteIndex = index;
    this.showConfirmDialog = true;
  }

  cancelDelete() {
    this.deleteIndex = null;
    this.showConfirmDialog = false;
  }

  proceedDelete() {
    if (this.deleteIndex !== null) {
      const target = this.safeRenderedStations[this.deleteIndex];
      if (!target) return;
      this.renderedStations = this.renderedStations.filter((_, i) => i !== this.deleteIndex);
      this.selectedRowIndex = null;
    }
    this.cancelDelete();
  }

  toggleSelection(station: any): void {
    station.selected = !station.selected;
  }

  // confirmStations(): void {
  //   this.selectedStations = this.stations.filter(s => s.selected);
  //   const stationsItems = this.selectedStations.reduce((acc, s, index) => {
  //     acc[index + 1] = {
  //       Name: s.name,
  //       ExpectedFlow: s.flow,
  //       Valves: { Items: {} }
  //     };
  //     return acc;
  //   }, {} as any);

  //   const stationGroup = {
  //     StationGroups: {
  //       Items: {
  //         1: {
  //           RuntTimeMinutes: this.selectedTimeDisplay !== '00:00'
  //             ? this.selectedTimeDisplay
  //             : this.convertMinutesToHHMM(this.group?.data?.RuntTimeMinutes ?? 0)
  //           ,
  //           Stations: { Items: stationsItems }
  //         }
  //       }
  //     }
  //   };

  //   localStorage.setItem('stationGroupData', JSON.stringify(stationGroup));

  //   this.renderedStations = this.selectedStations.map((s) => {
  //     const originalIndex = this.stations.findIndex(st => st.id === s.id);
  //     return {
  //       index: originalIndex + 1,
  //       name: s.name,
  //       flow: s.flow
  //     };
  //   });
  // }

  confirmStations(): void {
    this.selectedStations = this.stations.filter(s => s.selected);
  
    const stationsItems = this.selectedStations.reduce((acc, s, index) => {
      acc[index + 1] = {
        Name: s.name,
        ExpectedFlow: s.flow,
        Valves: { Items: {} }
      };
      return acc;
    }, {} as any);
  
    const [hoursStr, minutesStr] = this.selectedTimeDisplay.split(':');
    const totalRuntime = parseInt(hoursStr) * 60 + parseInt(minutesStr);
  
    const groupNumber = this.group.groupNumber;
    const key = 'stationGroupDataAll';
  
    // Retrieve global structure
    const raw = localStorage.getItem(key);
    let allGroupData: any = {
      Items: {}
    };
  
    if (raw) {
      try {
        allGroupData = JSON.parse(raw);
      } catch (e) {
        console.error("Failed to parse global group data from localStorage");
      }
    }
  
    // Update only current group
    allGroupData.Items[groupNumber] = {
      Stations: { Items: stationsItems },
      RuntTimeMinutes: totalRuntime
    };
  
    // Save back
    localStorage.setItem(key, JSON.stringify(allGroupData));
  
    // Also update UI
    this.renderedStations = this.selectedStations.map((s) => {
      const originalIndex = this.stations.findIndex(st => st.id === s.id);
      return {
        index: originalIndex + 1,
        name: s.name,
        flow: s.flow
      };
    });
  }
  
  get safeRenderedStations(): { index: number; name: string; flow: number }[] {
    return Array.isArray(this.renderedStations) ? this.renderedStations : [];
  }

  confirmTime(event: any) {
    const hourStr = event.hour;
    const minStr = event.minute;
    this.selectedTimeDisplay = `${hourStr}:${minStr}`;
    console.log("selected watering time is:", this.selectedTimeDisplay);
    this.openPopup = false;
  }

  getFormattedTime(): string {
    const value = this.selectedTimeDisplay !== '00:00'
      ? this.selectedTimeDisplay
      : this.convertMinutesToHHMM(this.group?.data?.RuntTimeMinutes ?? 0);
  
      if (!value) return "00:00:00";

      const numericValue = typeof value === 'string' ? parseFloat(value) : value;
      const totalSeconds = this.waterBoost * numericValue * 60;
    
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);
    
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
 
  getGroupVolume(): number {
    const timeString = this.selectedTimeDisplay !== '00:00'
      ? this.selectedTimeDisplay
      : this.convertMinutesToHHMM(this.group?.data?.RuntTimeMinutes ?? 0);
  
    if (!timeString || !this.waterBoost ) {
      return 0;
    }
  
    const [hoursStr, minutesStr] = timeString.split(':');
    const runtimeInMinutes = parseFloat(hoursStr) * 60 + parseFloat(minutesStr);
    const runtimeInSeconds = runtimeInMinutes * 60;
    const scaleFactor = this.waterBoost / 100;

  
    if (isNaN(runtimeInSeconds) || isNaN(scaleFactor)) {
      return 0;
    }
  
    const volumeKL = (this.totalFlowRate * runtimeInSeconds * scaleFactor) / 1000;
    return Math.round(volumeKL);
  }
  
  

}
