import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DatePipes } from '@/app/helper/date';
import { AlertItem } from '@/app/models/device-data.model';
import { dummyData } from '@/app/data/device-data';
import { DeviceDataService } from '@/app/services/station.service';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule,DatePipes],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'] 
})

export class AlertsComponent {
  data = Object.values(dummyData)
  alerts: { id: string, DateTimeUtc: string, Description: string }[] = [];
  constructor(private deviceDataService: DeviceDataService) {

  }
  ngOnInit() {
    this.init();
  }
  async init() {
    const resp = await this.deviceDataService.getDeviceData();
    const items = resp?.Alerts?.Items || {};

    this.alerts = Object.keys(items).map(key => {
      const alert = items[key];
      return {
        id: key,
        DateTimeUtc: new Date(parseInt(alert.DateTimeUtc) * 1000).toLocaleString(), 
        Description: alert.Description
      };
    });
  }
}
