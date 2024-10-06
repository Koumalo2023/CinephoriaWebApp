import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NAVIGATION_ITEMS, NavigationItem } from './navigation';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() isSidebarHidden = false;
  constructor(private router: Router) {}
  navigationItems: NavigationItem[] = NAVIGATION_ITEMS; // Assignation des items de navigation

  // Méthode pour gérer la visibilité des sous-éléments si besoin
  toggleSubnav(item: NavigationItem): void {
    if (item.children) {
      item.isOpen = !item.isOpen; // Toggle la classe ouverte/fermée
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
