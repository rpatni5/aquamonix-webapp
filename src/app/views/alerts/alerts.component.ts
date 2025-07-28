import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DUMMY_ALERTS } from '@/app/data/alerts';
import { AlertItem } from '@/app/models/alert.model';
import { DatePipes } from '@/app/helper/date';


@Component({
  selector: 'app-alerts',
  imports: [CommonModule,DatePipes],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {
  alerts: AlertItem[] = [];

  ngOnInit(): void {
    this.alerts = Object.values(DUMMY_ALERTS);
  }
}
