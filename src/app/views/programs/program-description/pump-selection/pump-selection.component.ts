import { UnsavedChanges } from '@/app/models/unsaved-changes';
import { StationService } from '@/app/services/station.service';
import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-pump-selection',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './pump-selection.component.html',
  styleUrl: './pump-selection.component.scss'
})
export class PumpSelectionComponent implements UnsavedChanges {
  program: any;
  pumps: any[] = [];
  checkedPumps: boolean[] = [];
  pumpCount: number = 0;
  hasUnsavedChanges: boolean = false;
  constructor(
    private sharedProgramService: SharedProgramService, private stationService: StationService
  ) { }


  async ngOnInit() {
    this.program = this.sharedProgramService.getProgram();
    let resp = await this.stationService.getDeviceData();
    const device = resp.Devices.Items['MPG101'];
    const pumpObj = device.MetaData.Device.Pumps.Items;

    if (pumpObj) {
      this.pumps = Object.values(pumpObj);
      console.log("pumps", this.pumps)
      this.pumpCount = this.pumps.length;
      this.checkedPumps = new Array(this.pumpCount).fill(false);

      const stored = localStorage.getItem('selectedPumps');
      if (stored) {
        const selectedPumps = JSON.parse(stored);
        const selectedIndexes = Object.keys(selectedPumps.Pumps.Items).map(Number);
        selectedIndexes.forEach(i => {
          this.checkedPumps[i - 1] = true; 
        });
      }
    }
  }


  hasChanges(): boolean {
    return this.hasUnsavedChanges;
  }

  saveStartTimes() {

  }

  togglePumpChecked(index: number): void {
    this.checkedPumps[index] = !this.checkedPumps[index];
  
    const stored = localStorage.getItem('selectedPumps');
    let selectedPumps = stored ? JSON.parse(stored) : { Pumps: { Items: {} } };
  
    if (this.checkedPumps[index]) {
      selectedPumps.Pumps.Items[index + 1] = {}; 
    } else {
      delete selectedPumps.Pumps.Items[index + 1];
    }
  
    localStorage.setItem('selectedPumps', JSON.stringify(selectedPumps));
  }
  

}
