import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // FIX: Set change detection to OnPush for better performance, especially with signals.
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  // FIX: Replaced @HostListener with the `host` property for better component encapsulation and adherence to best practices.
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#investment', label: 'Investment' },
    { href: '#contact', label: 'Contact' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
  
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 10);
  }

  scrollTo(event: Event, elementId: string): void {
    event.preventDefault();
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // For mobile: close the menu after clicking a link
    this.isMenuOpen.set(false);
  }
}