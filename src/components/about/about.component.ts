import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-[#16213e] overflow-hidden">
      <div class="container mx-auto px-6">
        <h2 class="font-cinzel text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12 scroll-reveal">
          About the Artist
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div class="fade-left">
            <div class="aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-purple-900/50 img-reveal glow-pulse">
              <img src="https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800"
                   alt="Tattoo Artist at Work"
                   loading="lazy"
                   decoding="async"
                   class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
            </div>
          </div>
          <div class="fade-right space-y-6">
            <p class="text-lg leading-relaxed">
              Welcome to <span class="text-purple-400 font-semibold">Purple Haze Tattoos</span>, where art meets skin in the heart of Perth.
              With a passion for illustrative blackwork and fine line precision, I create custom pieces that tell your unique story.
            </p>
            <p class="text-lg leading-relaxed">
              My specialties include:
            </p>
            <ul class="space-y-3 text-lg">
              <li *ngFor="let specialty of specialties; let i = index"
                  class="flex items-start scroll-reveal"
                  [style.transition-delay.ms]="200 + i * 100">
                <i class="fas fa-check text-purple-400 mt-1 mr-3"></i>
                <span><strong class="text-purple-300">{{ specialty.title }}</strong> - {{ specialty.desc }}</span>
              </li>
            </ul>
            <p class="text-lg leading-relaxed italic text-purple-200 scroll-reveal delay-500">
              "Every tattoo is a collaboration - your vision, my artistry, our masterpiece."
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  specialties = [
    { title: 'Illustrative Blackwork', desc: 'Bold, artistic designs with stunning contrast' },
    { title: 'Fine Line Tattoos', desc: 'Delicate, detailed work with precision' },
    { title: 'Pop Culture & Anime', desc: 'Bringing your favorite characters to life' },
    { title: 'Custom Designs', desc: 'Collaborative creations tailored to you' }
  ];
}