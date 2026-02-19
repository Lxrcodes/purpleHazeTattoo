import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 w-full bg-[#1a1a2e]/95 backdrop-blur-sm z-50 shadow-lg border-b border-purple-900/30">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-cinzel font-bold text-purple-400">
            Purple Haze Tattoos
          </div>
          <ul class="hidden md:flex space-x-8">
            <li><button (click)="scrollTo('home')" class="hover:text-purple-400 transition-colors cursor-pointer">Home</button></li>
            <li><button (click)="scrollTo('about')" class="hover:text-purple-400 transition-colors cursor-pointer">About</button></li>
            <li><button (click)="scrollTo('portfolio')" class="hover:text-purple-400 transition-colors cursor-pointer">Portfolio</button></li>
            <li><button (click)="scrollTo('investment')" class="hover:text-purple-400 transition-colors cursor-pointer">Investment</button></li>
            <li><button (click)="scrollTo('testimonials')" class="hover:text-purple-400 transition-colors cursor-pointer">Testimonials</button></li>
            <li><button (click)="scrollTo('contact')" class="hover:text-purple-400 transition-colors cursor-pointer">Contact</button></li>
          </ul>
          <button class="md:hidden text-purple-400">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}