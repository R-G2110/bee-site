import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonMdComponent } from '../../components/ui/button-md/button-md.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonMdComponent, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
