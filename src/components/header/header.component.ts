import { Component, EventEmitter, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { NAV_LINKS } from '../../data/constants';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navLinks = NAV_LINKS;

  @Output() cartToggle = new EventEmitter<boolean>();

  toggleCart(): void {
    this.cartToggle.emit();
  }
}


