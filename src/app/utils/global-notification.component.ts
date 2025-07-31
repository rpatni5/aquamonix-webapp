import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message" class="notification" [ngClass]="type">
      {{ message }}
    </div>
  `,
  styles: [`
    .notification {
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 20px;
      border-radius: 5px;
      color: white;
      z-index: 9999;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      min-width: 200px;
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
    .success {
      background-color: white;
      color: black;
    }
    .error { background-color: #dc3545; }
    .warning { background-color: #ffc107; color: black; }
    .default { background-color: #343a40; }
  `]
})
export class GlobalNotificationComponent implements OnInit {
  message: string = '';
  type: string = 'default';

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifications.subscribe(({ message, duration, type }) => {
      this.message = message;
      this.type = type;

      setTimeout(() => {
        this.message = '';
      }, duration || 2000);
    });
  }
}
