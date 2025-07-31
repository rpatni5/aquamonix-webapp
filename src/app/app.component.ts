import { Component, inject } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { GlobalNotificationComponent } from "./utils/global-notification.component";
import { NotificationService } from './utils/notification.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, GlobalNotificationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
 
  })
export class AppComponent {
  title = 'silva-angular'

  constructor(private router: Router, private notificationService: NotificationService) {}

  ngOnInit() {
    const state = window.history.state;
    if (state?.successMessage) {
      this.notificationService.notify(state.successMessage, 4000, 'success');
      history.replaceState({}, document.title); // optional cleanup
    }
  }
}
