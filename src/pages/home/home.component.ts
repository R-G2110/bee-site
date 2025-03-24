import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ButtonMdComponent } from '../../components/ui/button-md/button-md.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ButtonMdComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
