import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private static instance: NotificationService;
  private notificationSubject = new Subject<Notification | null>();
  notification$ = this.notificationSubject.asObservable();

  constructor() {
    console.log('NotificationService initialized');
    if (NotificationService.instance) {
      return NotificationService.instance;
    }
    NotificationService.instance = this;
  }

  showSuccess(message: string, duration: number = 3000): void {
    console.log('Showing success notification:', message);
    this.show({ message, type: 'success', duration });
  }

  showError(message: string, duration: number = 3000): void {
    console.log('Showing error notification:', message);
    this.show({ message, type: 'error', duration });
  }

  showInfo(message: string, duration: number = 3000): void {
    console.log('Showing info notification:', message);
    this.show({ message, type: 'info', duration });
  }

  showWarning(message: string, duration: number = 3000): void {
    console.log('Showing warning notification:', message);
    this.show({ message, type: 'warning', duration });
  }

  private show(notification: Notification): void {
    console.log('Emitting notification:', notification);
    this.notificationSubject.next(notification);
  }

  clear(): void {
    console.log('Clearing notifications');
    this.notificationSubject.next(null);
  }
}
