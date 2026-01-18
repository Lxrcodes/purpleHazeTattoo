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
            <li><a href="#home" class="hover:text-purple-400 transition-colors">Home</a></li>
            <li><a href="#about" class="hover:text-purple-400 transition-colors">About</a></li>
            <li><a href="#portfolio" class="hover:text-purple-400 transition-colors">Portfolio</a></li>
            <li><a href="#investment" class="hover:text-purple-400 transition-colors">Investment</a></li>
            <li><a href="#testimonials" class="hover:text-purple-400 transition-colors">Testimonials</a></li>
            <li><a href="#contact" class="hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
          <button class="md:hidden text-purple-400">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}