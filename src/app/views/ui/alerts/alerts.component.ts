import { Component } from '@angular/core'
import { alerts } from './data'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-alerts',
    imports: [NgbAlertModule],
    templateUrl: './alerts.component.html',
    styles: ``
})
export class AlertsComponent {
  alerts = alerts
}
