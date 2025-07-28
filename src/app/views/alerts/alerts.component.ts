import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-alerts',
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {
  alerts = [
    { time: 'Today 13:37', message: 'Program 9 Not Started (Rainswitch)' },
    { time: 'Today 13:37', message: 'Program 8 Not Started (Rainswitch)' },
    { time: 'Today 13:37', message: 'Program 6 Not Started (Rainswitch)' },
    { time: 'Today 11:12', message: 'Program 3 Not Started (Rainswitch)' },
    { time: 'Today 08:15', message: 'Program 7 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
    { time: 'Today 03:03', message: 'Program 5 Not Started (Rainswitch)' },
  ];
}
