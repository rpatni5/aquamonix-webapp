import { Component } from '@angular/core'
import feather from 'feather-icons'

@Component({
    selector: 'app-feather',
    imports: [],
    templateUrl: './feather.component.html',
    styles: ``
})
export class FeatherComponent {
  ngAfterViewInit() {
    feather.replace()
  }
}
