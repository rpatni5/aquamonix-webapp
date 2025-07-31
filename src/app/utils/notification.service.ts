import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export type NotificationType = 'success' | 'error' | 'warning' | 'default';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _notificationSubject = new Subject<{
    message: string;
    duration: number;
    type: NotificationType;
  }>();

  get notifications(): Observable<{
    message: string;
    duration: number;
    type: NotificationType;
  }> {
    return this._notificationSubject.asObservable();
  }

  notify(message: string, duration = 4000, type: NotificationType = 'default') {
    this._notificationSubject.next({ message, duration, type });
  }
}
