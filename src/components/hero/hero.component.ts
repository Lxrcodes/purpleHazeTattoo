import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-20">
      <div class="absolute inset-0 bg-[url('img/james-lee-PCAf6sWh7No-unsplash.jpg')] bg-cover bg-bottom opacity-20 brightness-25"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h1 class="font-cinzel text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-6 scroll-reveal">
          Purple Haze Tattoos
        </h1>
        <p class="font-garamond text-2xl md:text-3xl text-purple-200 mb-4 scroll-reveal">
          Illustrative Blackwork & Fine Line Artistry
        </p>
        <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 scroll-reveal">
          Perth-based tattoo artist specializing in custom illustrative designs, delicate fine line work, and pop culture tributes
        </p>
        <div class="flex flex-wrap gap-4 justify-center scroll-reveal">
          <a href="#portfolio" class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
            View Portfolio
          </a>
          <a href="#contact" class="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}