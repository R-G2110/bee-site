import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Aggiorna la lista degli articoli quando il carrello cambia
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  // Calcola il totale
  calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Rimuove un item
  removeItem(productId: number): void {
    this.cartService.removeItem(productId);
  }

  // Svuota il carrello
  clearCart(): void {
    this.cartService.clearCart();
  }

  // Procede al checkout
  checkout(): void {
    // TODO: Implementare la logica del checkout
    console.log('Procedi al checkout');
  }
}
