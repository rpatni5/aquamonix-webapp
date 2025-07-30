import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SharedProgramService {
  private readonly storageKey = 'selectedProgram';
  private selectedProgram: any;

  private startTimesChanged = false;

  setProgram(program: any) {
    this.selectedProgram = program;
    localStorage.setItem(this.storageKey, JSON.stringify(program));
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
