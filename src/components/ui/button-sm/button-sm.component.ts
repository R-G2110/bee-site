import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-sm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-sm.component.html',
  styleUrls: ['./button-sm.component.scss']
})
export class ButtonSmComponent implements OnInit {
  @Input() customClass: string = '';
  @Input() label: string = '';

  constructor() { }
  ngOnInit() {
  }

}
