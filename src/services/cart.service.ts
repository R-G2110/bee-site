// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  // Altri campi possono essere aggiunti se necessario (es. immagine, descrizione, etc.)
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Stato iniziale: carrello vuoto
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() { }

  // Ritorna un Observable per sottoscrivere le modifiche del carrello
  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  // Aggiunge un prodotto al carrello
  addItem(item: CartItem): void {
    const currentItems = this.cartItemsSubject.value;
    // Verifica se l'elemento esiste già: se sì, aggiorna la quantità
    const itemIndex = currentItems.findIndex(ci => ci.id === item.id);
    if (itemIndex > -1) {
      currentItems[itemIndex].quantity += item.quantity;
    } else {
      currentItems.push(item);
    }
    this.cartItemsSubject.next([...currentItems]);
  }

  // Aggiorna la quantità di un prodotto specifico
  updateItemQuantity(id: string, quantity: number): void {
    const currentItems = this.cartItemsSubject.value;
    const itemIndex = currentItems.findIndex(ci => ci.id === id);
    if (itemIndex > -1) {
      currentItems[itemIndex].quantity = quantity;
      this.cartItemsSubject.next([...currentItems]);
    }
  }

  // Rimuove un prodotto dal carrello
  removeItem(id: string): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(ci => ci.id !== id);
    this.cartItemsSubject.next([...updatedItems]);
  }

  // Svuota il carrello
  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}

