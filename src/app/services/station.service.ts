import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, of } from 'rxjs';
import { dummyData } from '../data/device-data';

@Injectable({
    providedIn: 'root'
})
export class DeviceDataService {

    constructor() { }

    async getDeviceData(): Promise<any> {
        return await firstValueFrom(of(dummyData));
    }
}
