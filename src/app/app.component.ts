import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
 
  })
export class AppComponent {
  title = 'silva-angular'

  ngOnInit(): void {
  }
}
