import { Component, OnInit } from '@angular/core';

import { HomeComponent } from '../../pages/home/home.component';
import { FeaturesComponent } from '../../pages/features/features.component';
import { ProductCatalogComponent } from '../../pages/productCatalog/productCatalog.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ProcessComponent } from '../../pages/process/process.component';
import { ReviewsComponent } from '../../pages/reviews/reviews.component';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { TeamComponent } from '../../pages/team/team.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, FeaturesComponent, ProductCatalogComponent, AboutComponent, ProcessComponent, ReviewsComponent, ContactsComponent, TeamComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
