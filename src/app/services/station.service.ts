import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable, of } from 'rxjs';
import { dummyData } from '../data/device-data';

@Injectable({
    providedIn: 'root'
})
export class DeviceDataService {
    private selectedStationsSource = new BehaviorSubject<any[]>([]);
    selectedStations$ = this.selectedStationsSource.asObservable();
    setSelectedStations(stations: any[]) {
        this.selectedStationsSource.next(stations);
    }

    getSelectedStations() {
        return this.selectedStationsSource.getValue();
    }

    async getDeviceData(): Promise<any> {
        return await firstValueFrom(of(dummyData));
    }
}
