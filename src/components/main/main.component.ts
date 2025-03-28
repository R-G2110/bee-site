import { Component, OnInit, OnDestroy, Output, EventEmitter, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

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
export class MainComponent implements OnInit, OnDestroy {
  @Output() sectionChanged = new EventEmitter<string>();
  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser && typeof IntersectionObserver !== 'undefined') {
      const options = {
        root: null,
        threshold: 0.5
      };

      this.observer = new IntersectionObserver(this.handleIntersection.bind(this), options);
      const sections = document.querySelectorAll('section');
      sections.forEach(section => this.observer?.observe(section));

      // Forza la sezione "home" come attiva al caricamento iniziale
      this.sectionChanged.emit('home');
    } else {
      console.warn('IntersectionObserver non è supportato in questo ambiente.');
    }
  }


  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const visibleSections = entries.filter(entry => entry.isIntersecting);

    if (visibleSections.length > 0) {
      const topSection = visibleSections.reduce((prev, curr) => {
        return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
      });

      this.sectionChanged.emit(topSection.target.id);
    }
  }


  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
