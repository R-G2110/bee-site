import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  message: string = '';
  type: 'success' | 'error' | 'info' | 'warning' = 'info';
  show: boolean = false;
  private subscription: Subscription;

  constructor(private notificationService: NotificationService) {
    console.log('ToastComponent initialized');
    this.subscription = this.notificationService.notification$.subscribe({
      next: (notification) => {
        console.log('Toast received notification:', notification);
        if (notification) {
          this.message = notification.message;
          this.type = notification.type;
          this.show = true;
          console.log('Showing toast:', { message: this.message, type: this.type });
          setTimeout(() => {
            this.show = false;
            console.log('Hiding toast');
          }, notification.duration || 3000);
        }
      },
      error: (error) => {
        console.error('Error in toast subscription:', error);
      }
    });
  }

  ngOnInit() {
    console.log('ToastComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('ToastComponent ngOnDestroy');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
