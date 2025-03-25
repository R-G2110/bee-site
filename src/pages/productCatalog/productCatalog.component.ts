import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSmComponent } from '../../components/ui/button-sm/button-sm.component';
import { ButtonMdComponent } from '../../components/ui/button-md/button-md.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-productCatalog',
  standalone: true,
  imports: [CommonModule, ButtonSmComponent, ButtonMdComponent],
  templateUrl: './productCatalog.component.html',
  styleUrls: ['./productCatalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Manuka Honey',
      description: 'Premium honey known for its unique properties and bold flavor.',
      price: 20.00,
      image: '/assets/images/manuka honey.png',
      type: 'Raw Honey',
      category: 'Raw Honey'
    },
    {
      id: 2,
      name: 'Lavender Honey',
      description: 'Delicate honey infused with the essence of lavender flowers.',
      price: 18.00,
      image: '/assets/images/manuka honey.png',
      type: 'Infused Honey',
      category: 'Infused Honey'
    },
    {
      id: 3,
      name: 'Wildflower Honey',
      description: 'Natural honey collected from various wildflowers.',
      price: 15.00,
      image: '/assets/images/manuka honey.png',
      type: 'Floreal Honey',
      category: 'Floreal Honey'
    },
    {
      id: 4,
      name: 'Acacia Honey',
      description: 'Light and delicate honey with a subtle floral aroma.',
      price: 22.00,
      image: '/assets/images/manuka honey.png',
      type: 'Exotic Honey',
      category: 'Exotic Honey'
    },
    {
      id: 5,
      name: 'Honeycomb',
      description: 'Pure honeycomb with natural honey.',
      price: 25.00,
      image: '/assets/images/manuka honey.png',
      type: 'Honeycomb',
      category: 'Honeycomb'
    }
  ];

  filteredProducts: Product[] = [];
  selectedCategory: string = 'All Products';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.filteredProducts = this.products;
  }

  filterProducts(category: string) {
    this.selectedCategory = category;
    if (category === 'All Products') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }

  addToCart(product: Product) {
    this.cartService.addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      type: product.type
    });
  }
}
