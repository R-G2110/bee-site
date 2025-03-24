import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy {
  scrolled = false;
  isCartOpen = false;
  cartItems: any[] = [];
  cartItemCount = 0;
  navLinks = NAV_LINKS

  private scrollHandler: any;
  private cartSubscription!: Subscription;
  private isBrowser: boolean;

  constructor(
    private cartService: CartService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    // Determina se il codice viene eseguito nel browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Aggiunge il listener allo scroll solo se siamo nel browser
      this.scrollHandler = () => {
        this.scrolled = window.scrollY > 10;
      };
      window.addEventListener('scroll', this.scrollHandler);
    }

    // Sottoscrizione al servizio del carrello per aggiornare gli elementi
    this.cartSubscription = this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.cartItemCount = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    });
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  toggleCart(open: boolean): void {
    this.isCartOpen = open;
  }
}


