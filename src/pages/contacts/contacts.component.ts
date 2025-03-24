import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonMdComponent } from '../../components/ui/button-md/button-md.component';
import { NewsletterComponent } from '../../components/ui/newsletter/newsletter.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonMdComponent, NewsletterComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
