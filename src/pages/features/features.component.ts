import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FEATURES } from '../../data/constants';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features = FEATURES

  constructor() { }
  ngOnInit() {
  }

}
