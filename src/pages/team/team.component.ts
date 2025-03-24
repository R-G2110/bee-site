import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TEAM } from '../../data/constants';


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamMembers = TEAM;

  toggleExpanded(event: MouseEvent) {
    const hexagon = event.currentTarget as HTMLElement;

    // Rimuovo la classe 'expanded' da tutti gli altri esagoni
    const allHexagons = document.querySelectorAll('.hex-small');
    allHexagons.forEach(hex => {
      if (hex !== hexagon) {
        hex.classList.remove('expanded');
      }
    });

    // Toggle della classe 'expanded' sull'esagono cliccato
    hexagon.classList.toggle('expanded');
  }
}
