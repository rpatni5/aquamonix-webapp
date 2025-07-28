import { Component } from '@angular/core';

@Component({
  selector: 'app-system-status',
  imports: [],
  templateUrl: './system-status.component.html',
  styleUrl: './system-status.component.scss'
})
export class SystemStatusComponent {
 deviceStatus = {
    outputSenseLabel: 'Local Sense',
    outputSenseValue: '0 mA',
    waterUsage: {
      monthTotal: '0 kL',
      yearTotal: '0 kL'
    },
    firmwareVersion: 'v250217'
  };
}
