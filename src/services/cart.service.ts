import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItems.asObservable();

  constructor(private notificationService: NotificationService) {
    console.log('CartService initialized with NotificationService');
  }

  addToCart(item: CartItem): void {
    console.log('Adding to cart:', item);
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
      console.log('Updating quantity, showing notification');
      this.notificationService.showSuccess(`Quantity of ${item.name} updated in cart`);
    } else {
      currentItems.push({ ...item, quantity: 1 });
      console.log('Adding new item, showing notification');
      this.notificationService.showSuccess(`${item.name} added to cart`);
    }

    this.cartItems.next([...currentItems]);
  }

  removeFromCart(item: CartItem): void {
    console.log('Removing from cart:', item);
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      console.log('Reducing quantity, showing notification');
      this.notificationService.showInfo(`Quantity of ${item.name} reduced in cart`);
      this.cartItems.next([...currentItems]);
    }
  }

  removeItem(item: CartItem): void {
    console.log('Removing item completely:', item);
    const currentItems = this.cartItems.getValue();
    this.cartItems.next(currentItems.filter(i => i.id !== item.id));
    this.notificationService.showWarning(`${item.name} removed from cart`);
  }

  clearCart(): void {
    console.log('Clearing cart, showing notification');
    this.cartItems.next([]);
    this.notificationService.showInfo('Cart emptied');
  }

  getTotalItems(): number {
    return this.cartItems.getValue().reduce((sum, item) => sum + item.quantity, 0);
  }

  // Calcola il prezzo totale
  getTotalPrice(): number {
    return this.cartItems.getValue().reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
