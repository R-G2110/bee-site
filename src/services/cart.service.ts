import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  type: string;  // Nuova proprietà
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  // Osservabile per notificare i cambiamenti del carrello
  cartItems$ = this.cartItemsSubject.asObservable();

  // Aggiunge un nuovo item o incrementa la quantità se già presente
  addItem(item: CartItem): void {
    const index = this.items.findIndex(i => i.productId === item.productId);
    if (index !== -1) {
      this.items[index].quantity += item.quantity;
    } else {
      this.items.push(item);
    }
    this.cartItemsSubject.next(this.items);
  }

  // Rimuove un item dal carrello
  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.productId !== productId);
    this.cartItemsSubject.next(this.items);
  }

  // Svuota il carrello
  clearCart(): void {
    this.items = [];
    this.cartItemsSubject.next(this.items);
  }

  // Restituisce il numero totale di articoli
  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Calcola il prezzo totale
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
