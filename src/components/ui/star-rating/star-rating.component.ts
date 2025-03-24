import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number = 0;

  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    // Utilizza la notazione con parentesi quadre per accedere a 'rating'
    if (changes['rating']) {
      this.calculateStars();
    }
  }

  calculateStars(): void {
    // Puoi mantenere l'accesso a this.rating, dato che qui la proprietà è definita esplicitamente
    const ratingValue = this.rating;
    const full = Math.floor(ratingValue);
    this.fullStars = Array(full).fill(0);

    this.halfStar = (ratingValue - full) >= 0.5;
    const empty = 5 - full - (this.halfStar ? 1 : 0);
    this.emptyStars = Array(empty).fill(0);
  }
}
