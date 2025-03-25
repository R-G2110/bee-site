import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  navLinks = NAV_LINKS;
  cartItemCount: number = 0;
  private cartSubscription: Subscription;

  @Output() cartToggle = new EventEmitter<boolean>();

  constructor(private cartService: CartService) {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }

  ngOnInit(): void {
    // Inizializza il contatore
    this.cartItemCount = this.cartService.getTotalItems();
  }

  ngOnDestroy(): void {
    // Pulisci la subscription quando il componente viene distrutto
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  toggleCart(): void {
    this.cartToggle.emit();
  }
}


