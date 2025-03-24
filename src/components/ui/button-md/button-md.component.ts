import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-md',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-md.component.html',
  styleUrls: ['./button-md.component.scss']
})
export class ButtonMdComponent implements OnInit {

  @Input() customClass: string = '';
  @Input() label: string = '';

  constructor() { }
  ngOnInit() {
  }

}
