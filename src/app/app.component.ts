import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { Error404Component } from '../pages/error404/error404.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CartComponent } from '../components/ui/cart/cart.component';
import { ToastComponent } from '../components/ui/toast/toast.component';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    Error404Component,
    CartComponent,
    ToastComponent
  ],
  providers: [NotificationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bee-site';
  headerCartOpen: boolean = false;
  show = false;
  activeSection: string = 'home';

  constructor() {
    console.log('AppComponent initialized');
  }

  onCartToggle(): void {
    this.headerCartOpen = !this.headerCartOpen;
  }

  onCartClose(): void {
    this.headerCartOpen = false;
  }

  onSectionChanged(section: string) {
    this.activeSection = section;
    console.log('Sezione attiva aggiornata:', this.activeSection);
  }
}
