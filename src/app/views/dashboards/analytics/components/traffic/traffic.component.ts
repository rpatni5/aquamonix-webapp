import { Component } from '@angular/core'
import { traffic } from '../../data'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-traffic',
    imports: [NgbProgressbarModule],
    templateUrl: './traffic.component.html',
    styles: ``
})
export class TrafficComponent {
  traffic = traffic
}
