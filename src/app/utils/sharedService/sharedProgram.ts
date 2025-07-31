import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SharedProgramService {
  private readonly storageKey = 'selectedProgram';
  private selectedProgram: any;
  private selectedGroup: any;

  private startTimesChanged = false;

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

}
