import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItems.asObservable();

  addToCart(item: CartItem): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItems.next([...currentItems]);
  }

  removeFromCart(item: CartItem): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      this.cartItems.next([...currentItems]);
    }
  }

  removeItem(item: CartItem): void {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next(currentItems.filter(i => i.id !== item.id));
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getTotalItems(): number {
    return this.cartItems.getValue().reduce((sum, item) => sum + item.quantity, 0);
  }

  // Calcola il prezzo totale
  getTotalPrice(): number {
    return this.cartItems.getValue().reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
