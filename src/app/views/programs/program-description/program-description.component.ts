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

  constructor(
    private router: Router,
    private sharedProgramService: SharedProgramService,
    private confirmationDialogService: ConfirmationDialogService,
    private programService: ProgramService,
    private notificationService :NotificationService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.program = this.sharedProgramService.getProgram();
  }

  onRangeChange() {
    this.waterBoost = this.waterBoostSteps[this.rangeIndex];
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
  }

  onWaterBoostInputChange() {
    this.waterBoost = this.clamp(this.waterBoost, 0, 125);
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
  
  
  
}
