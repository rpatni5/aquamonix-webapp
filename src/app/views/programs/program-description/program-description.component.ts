import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-program-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './program-description.component.html',
  styleUrls: ['./program-description.component.scss'] 
})
export class ProgramDescriptionComponent {
  waterBoostSteps = [0, 25, 50, 75, 100, 125];
  rangeIndex = 0;
  waterBoost = this.waterBoostSteps[this.rangeIndex];

  onRangeChange() {
    this.waterBoost = this.waterBoostSteps[this.rangeIndex];
  }

  onStartTimesClick() {
    // Navigate or open modal
  }

  onGroupsClick() {
    // Navigate or open modal
  }

  onPumpSelectionClick() {
    // Navigate or open modal
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
}
