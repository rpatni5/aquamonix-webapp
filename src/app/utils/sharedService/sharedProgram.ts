import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SharedProgramService {
  private readonly storageKey = 'selectedProgram';
  private waterBoostKey = 'waterBoost';
  private selectedProgram: any;
  private selectedGroup: any;

  private startTimesChanged = false;
  private waterBoostSubject = new BehaviorSubject<number>(0);
  waterBoost$ = this.waterBoostSubject.asObservable();



  setProgram(program: any) {
    this.selectedProgram = program;
    localStorage.setItem(this.storageKey, JSON.stringify(program));
  }

  setGroup(group: any) {
    this.selectedGroup = group;
    localStorage.setItem('selectedGroup', JSON.stringify(group));
  }

  getGroup() {
    if (!this.selectedGroup) {
      const stored = localStorage.getItem('selectedGroup');
      if (stored) {
        this.selectedGroup = JSON.parse(stored);
      }
    }
    return this.selectedGroup;
  }

  getProgram() {
    if (!this.selectedProgram) {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.selectedProgram = JSON.parse(stored);
      }
    }
    return this.selectedProgram;
  }

  clearProgram() {
    localStorage.removeItem(this.storageKey);
    this.selectedProgram = null;
  }

  setStartTimesChanged(value: boolean) {
    this.startTimesChanged = value;
  }

  hasStartTimesChanged(): boolean {
    return this.startTimesChanged;
  }

  resetStartTimesChanges() {
    this.startTimesChanged = false;
  }

  setWaterBoost(value: number) {
    this.waterBoostSubject.next(value);
    localStorage.setItem(this.waterBoostKey, JSON.stringify(value));
  }

  getCurrentWaterBoost(): number {
    const stored = localStorage.getItem(this.waterBoostKey);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed)) {
        this.waterBoostSubject.next(parsed); // update BehaviorSubject so subscribers still work
        return parsed;
      }
    }
    return 0;
  }

}
