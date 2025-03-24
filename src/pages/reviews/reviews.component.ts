import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { REVIEWS } from '../../data/constants';

import { StarRatingComponent } from '../../components/ui/star-rating/star-rating.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews = REVIEWS

  constructor() { }
  ngOnInit() {
  }

}
