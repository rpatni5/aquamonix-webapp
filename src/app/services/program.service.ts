import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ProgramService {
    private selectedProgramSource = new BehaviorSubject<any[]>([]);
    selectedProgram$ = this.selectedProgramSource.asObservable();

    setSelectedPrograms(programs: any[]) {
        this.selectedProgramSource.next(programs);
    }

    getSelectedPrograms() {
        return this.selectedProgramSource.getValue();
    }
}

