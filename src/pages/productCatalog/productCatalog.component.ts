import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonSmComponent } from '../../components/ui/button-sm/button-sm.component';
import { ButtonMdComponent } from '../../components/ui/button-md/button-md.component';

@Component({
  selector: 'app-productCatalog',
  standalone: true,
  imports: [CommonModule, ButtonSmComponent, ButtonMdComponent],
  templateUrl: './productCatalog.component.html',
  styleUrls: ['./productCatalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
