import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ProgramService {
    private selectedProgramSource = new BehaviorSubject<any[]>([]);
    selectedProgram$ = this.selectedProgramSource.asObservable();
    private stopSignalSubject = new BehaviorSubject<boolean>(false);
    stopSignal$ = this.stopSignalSubject.asObservable();
    private showStopButtonSubject = new BehaviorSubject<boolean>(false);
    showStopButton$ = this.showStopButtonSubject.asObservable();
    setSelectedPrograms(programs: any[]) {
        this.selectedProgramSource.next(programs);
    }

    getSelectedPrograms() {
        return this.selectedProgramSource.getValue();
    }
    sendStopSignal() {
        this.stopSignalSubject.next(true);
        this.setShowStopButton(false)
    }

    clearStopSignal() {
        this.stopSignalSubject.next(false);
    }
    setShowStopButton(show: boolean) {
        this.showStopButtonSubject.next(show);
    }

    getShowStopButtonValue() {
        return this.showStopButtonSubject.getValue();
    }
}

