import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent  {
  @Output() toggleSidebar = new EventEmitter<void>();
  // Track user menu open/close state
  isMenuOpen: boolean = false;

  userName: string = "John Doe";
  constructor(private router: Router) {}
  toggleSidebarVisibility() {
    this.toggleSidebar.emit();
  }

  // Toggle user menu display
  toggleUserMenu(event: MouseEvent) {
    event.stopPropagation(); // Prevent the click from closing the menu
    this.isMenuOpen = !this.isMenuOpen;
  }
  // Close menu when clicked outside
  @HostListener('document:click', ['$event'])
  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    // Add your logout logic here
    console.log("User logged out");
    // You might want to redirect the user to the login page after logout
  }
}
