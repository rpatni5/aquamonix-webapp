import { UnsavedChanges } from '@/app/models/unsaved-changes';
import { ProgramService } from '@/app/services/program.service';
import { ConfirmationDialogService } from '@/app/utils/confirmation-popup/confirmation-dialog.service';
import { GlobalNotificationComponent } from '@/app/utils/global-notification.component';
import { NotificationService } from '@/app/utils/notification.service';
import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-program-description',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,],
  templateUrl: './program-description.component.html',
  styleUrls: ['./program-description.component.scss']
})
export class ProgramDescriptionComponent implements UnsavedChanges {

  program: any;
  waterBoostSteps = [0, 25, 50, 75, 100, 125];
  rangeIndex = 0;
  waterBoost = this.waterBoostSteps[this.rangeIndex];
  skipUnsavedCheck = false;
  minGroupFlow: number = 0;
  maxGroupFlow: number = 0;
  actualProgramVolume: number = 0;
  actualProgramVolumeFortnight: number = 0;


  constructor(
    private router: Router,
    private sharedProgramService: SharedProgramService,
    private confirmationDialogService: ConfirmationDialogService,
    private programService: ProgramService,
    private notificationService: NotificationService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.program = this.sharedProgramService.getProgram();
    this.waterBoost = this.sharedProgramService.getCurrentWaterBoost();
    this.rangeIndex = this.getClosestStepIndex(this.waterBoost);

    this.logCompleteProgramJSON();
    this.calculateGroupFlowRange();

  }

  onRangeChange() {
    this.waterBoost = this.waterBoostSteps[this.rangeIndex];
    this.sharedProgramService.setWaterBoost(this.waterBoost);
  }

  getSliderTrackColor(boostValue: number): string {
    const percent = (boostValue / 125) * 100;
    return `linear-gradient(to right, #adb5bd ${percent}%, #dee2e6 ${percent}%)`;
  }

  onWaterBoostInput(): void {
    const closestIndex = this.getClosestStepIndex(this.waterBoost);
    this.rangeIndex = closestIndex;
    this.waterBoost = this.waterBoostSteps[closestIndex];
  }

  getClosestStepIndex(value: number): number {
    let closestIndex = 0;
    let minDiff = Infinity;
    this.waterBoostSteps.forEach((step, index) => {
      const diff = Math.abs(value - step);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });
    return closestIndex;
  }

  onWaterBoostSliderChange() {
    this.waterBoost = this.clamp(this.waterBoost, 0, 125);
    this.sharedProgramService.setWaterBoost(this.waterBoost);
  }

  onWaterBoostInputChange() {
    this.waterBoost = this.clamp(this.waterBoost, 0, 125);
    this.sharedProgramService.setWaterBoost(this.waterBoost);
  }

  clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  onStartTimesClick(program: any) {
    const slug = this.slugify(program.name);
    this.sharedProgramService.setProgram(program);
    this.router.navigate(['programs', slug, 'starttimes']);
  }

  onGroupsClick(program: any) {
    const slug = this.slugify(program.name);
    this.sharedProgramService.setProgram(program);
    this.router.navigate(['programs', slug, 'groups']);
  }

  onPumpSelectionClick(program: any) {
    const slug = this.slugify(program.name);
    this.sharedProgramService.setProgram(program);
    this.router.navigate(['programs', slug, 'pump']);
  }

  slugify(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  hasChanges(): boolean {
    if (this.skipUnsavedCheck) return false;
    return this.sharedProgramService.hasStartTimesChanged();
  }

  saveStartTimes(): void {
    if (!this.program) return;

    this.programService.setSelectedPrograms([this.program]);
    this.programService.sendCommandSentSuccessfully();

    this.notificationService?.notify('Program data has been saved successfully!', 3000, 'success');

    this.skipUnsavedCheck = true;
    this.markChangesSaved();

    this.ngZone.run(() => {
      setTimeout(() => {
        this.router.navigate(['/programs']);
      });
    });
  }

  markChangesSaved() {
    this.sharedProgramService.setStartTimesChanged(false);
  }


  discardChanges(): void {
    if (!this.hasChanges) {
      this.router.navigate(['/programs', this.program?.name]);
      return;
    }

    this.confirmationDialogService
      .confirm('Unsaved Changes', 'You have unsaved changes. Save or Discard before leaving?')
      .then((result) => {
        if (result === 'discard') {
          this.markChangesSaved();
          const programId = this.program?.name.match(/\d+$/)?.[0] || '1';
          localStorage.removeItem('savedStartTimes_' + programId);
          localStorage.removeItem('startTimesStruct_' + programId);
          localStorage.removeItem('dayTableStruct_' + programId);
          localStorage.removeItem('selectedPumps');
          localStorage.removeItem('stationGroupDataAll');


          this.router.navigate(['/programs', this.program?.name]);
        }
      });
  }

  onSaveProgram(program: any) {
    this.confirmationDialogService
      .confirm('Save Program', 'Do you want to save this program?', 'saveOnly')
      .then((response) => {
        if (response === 'save') {
          this.programService.setSelectedPrograms([this.program]);

          this.programService.sendCommandSentSuccessfully();

          this.notificationService?.notify('Program data has been saved successfully!', 3000, 'success');

          this.skipUnsavedCheck = true;
          this.markChangesSaved();

          this.ngZone.run(() => {
            setTimeout(() => {
              this.router.navigate(['/programs']);
            });
          });
        }
      });
  }


  calculateGroupFlowRange(): void {
    const groupData = localStorage.getItem('stationGroupDataAll');
    if (!groupData) return;

    const parsedGroups = JSON.parse(groupData);
    const groupItems = parsedGroups?.Items;

    if (!groupItems) return;

    const groupFlows: number[] = [];

    Object.values(groupItems).forEach((group: any) => {
      let groupFlow = 0;

      const stationItems = group?.Stations?.Items || {};
      Object.values(stationItems).forEach((station: any) => {
        const expectedFlow = parseFloat(station?.ExpectedFlow || '0');
        if (!isNaN(expectedFlow)) {
          groupFlow += expectedFlow;
        }
      });

      groupFlows.push(groupFlow);
    });

    if (groupFlows.length > 0) {
      this.minGroupFlow = Math.min(...groupFlows);
      this.maxGroupFlow = Math.max(...groupFlows);
    }
  }

  // calculateActualProgramVolume(parsedGroups: any): void {
  //   const groupItems = parsedGroups?.Items;
  //   if (!groupItems) return;

  //   const waterBoostMultiplier = this.waterBoost / 100;
  //   let totalVolumeKL = 0;

  //   Object.values(groupItems).forEach((group: any) => {
  //     let groupFlowLps = 0; // Liters per second

  //     const stationItems = group?.Stations?.Items || {};
  //     Object.values(stationItems).forEach((station: any) => {
  //       const expectedFlow = parseFloat(station?.ExpectedFlow || '0');
  //       if (!isNaN(expectedFlow)) {
  //         groupFlowLps += expectedFlow;
  //       }
  //     });

  //     const runtimeMinutes = parseFloat(group?.RuntTimeMinutes || '0');
  //     const runtimeSeconds = runtimeMinutes * 60;

  //     const groupVolumeKL = (groupFlowLps * runtimeSeconds * waterBoostMultiplier) / 1000;
  //     totalVolumeKL += groupVolumeKL;
  //   });

  //   this.actualProgramVolume = parseFloat(totalVolumeKL.toFixed(2));
  // }

  calculateActualProgramVolume(parsedGroups: any): void {
    const groupItems = parsedGroups?.Items;
    if (!groupItems) return;

    const waterBoostMultiplier = this.waterBoost / 100;
    let totalVolumeKL = 0;

    Object.values(groupItems).forEach((group: any) => {
      let groupFlowLps = 0;

      const stationItems = group?.Stations?.Items || {};
      Object.values(stationItems).forEach((station: any) => {
        const expectedFlow = parseFloat(station?.ExpectedFlow || '0');
        if (!isNaN(expectedFlow)) {
          groupFlowLps += expectedFlow;
        }
      });

      const runtimeMinutes = parseFloat(group?.RuntTimeMinutes || '0');
      const runtimeSeconds = runtimeMinutes * 60;

      const groupVolumeKL = (groupFlowLps * runtimeSeconds * waterBoostMultiplier) / 1000;
      totalVolumeKL += groupVolumeKL;
    });

    this.actualProgramVolume = parseFloat(totalVolumeKL.toFixed(2));

    // 📦 Fortnight Calculation
    // Try to pull updated StartConditions from localStorage
    let enabledStartConditions = 0;
    const programId = this.program?.name?.match(/\d+$/)?.[0] || '1';
    const savedStartTimes = localStorage.getItem('startTimesStruct_' + programId);

    if (savedStartTimes) {
      const parsed = JSON.parse(savedStartTimes);
      const items = parsed?.Items || {};

      enabledStartConditions = Object.values(items).filter((item: any) => item?.Enabled).length;
    } else {
      enabledStartConditions = Object.values(this.program?.StartConditions?.Items || {}).filter((item: any) => item?.Enabled).length;
    }

    let daysInTable = 0;
    const savedDayTable = localStorage.getItem('dayTableStruct_' + programId);
    
    if (savedDayTable) {
      const parsedTable = JSON.parse(savedDayTable);
      daysInTable = parsedTable.filter(Boolean).length;
    } else {
      daysInTable = (this.program?.DayTable || []).filter(Boolean).length;
    }
    
    const fortnightVolume = totalVolumeKL * enabledStartConditions * daysInTable;

    this.actualProgramVolumeFortnight = parseFloat(fortnightVolume.toFixed(2));
  }



  logCompleteProgramJSON() {
    const result: any = {};

    const programId = this.program?.name?.match(/\d+$/)?.[0] || '1';

    result[programId] = {
      SetToRun: false,
      StartConditions: {
        Items: {},
      },
      Pumps: {
        Items: {},
      },
      StationGroups: {
        Items: {},
      },
      ScaleFactor: {
        Value: this.sharedProgramService.getCurrentWaterBoost().toString(),
        Visible: 'true',
      },
      DayTable: [],
      Status: {
        Value: 'CommandSent',
        Visible: true,
      },
      DeviceId: 'RM Controller',
    };

    const savedStartTimes = localStorage.getItem('startTimesStruct_' + programId);
    if (savedStartTimes) {
      const parsed = JSON.parse(savedStartTimes);

      result[programId].DayTable = parsed.DayTable || [];

      const items = parsed.Items || {};

      Object.entries(items).forEach(([key, item]: any) => {
        result[programId].StartConditions.Items[key] = {
          Type: 'Time',
          Enabled: item.Enabled,
          StartTimeInMinutes: item.Enabled ? item.StartTimeInMinutes : 'Off',
        };
      });
    }

    const savedDayTable = localStorage.getItem('dayTableStruct_' + programId);
    if (savedDayTable) {
      result[programId].DayTable = JSON.parse(savedDayTable);
    }

    const selectedPumps = localStorage.getItem('selectedPumps');
    if (selectedPumps) {
      const parsedPumps = JSON.parse(selectedPumps);
      result[programId].Pumps = parsedPumps;
    }

    const groupData = localStorage.getItem('stationGroupDataAll');
    if (groupData) {
      const parsedGroups = JSON.parse(groupData);
      result[programId].StationGroups = parsedGroups;

      this.calculateActualProgramVolume(parsedGroups);
    }
    console.log('Complete Program JSON:', result);
  }

}
