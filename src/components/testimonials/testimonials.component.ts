import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-20 bg-[#1a1a2e]">
      <div class="container mx-auto px-6">
        <h2 class="font-cinzel text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4 scroll-reveal">
          Client Love
        </h2>
        <p class="text-center text-slate-400 mb-12 scroll-reveal">
          Hear what my clients have to say
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div *ngFor="let testimonial of testimonials" class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-900/30 hover:border-purple-500/50 transition-all scroll-reveal shadow-lg">
            <div class="flex items-center mb-4">
              <i *ngFor="let star of [1,2,3,4,5]" class="fas fa-star text-yellow-400"></i>
            </div>
            <p class="text-slate-300 mb-4 italic">"{{ testimonial.text }}"</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
                {{ testimonial.initial }}
              </div>
              <div>
                <p class="font-semibold text-purple-300">{{ testimonial.name }}</p>
                <p class="text-sm text-slate-500">{{ testimonial.piece }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      piece: 'Fine Line Floral Sleeve',
      text: 'Absolutely stunning work! The attention to detail is incredible. I get compliments everywhere I go.'
    },
    {
      id: 2,
      name: 'James K.',
      initial: 'J',
      piece: 'Illustrative Dragon',
      text: 'Best tattoo experience ever. Professional, clean studio and the artwork exceeded my expectations.'
    },
    {
      id: 3,
      name: 'Emma L.',
      initial: 'E',
      piece: 'Anime Portrait',
      text: 'Captured my favorite character perfectly! The skill and artistry are next level.'
    },
    {
      id: 4,
      name: 'Marcus T.',
      initial: 'M',
      piece: 'Geometric Wolf',
      text: 'Clean lines, perfect symmetry. This is art I\'ll proudly wear forever.'
    },
    {
      id: 5,
      name: 'Olivia R.',
      initial: 'O',
      piece: 'Minimalist Design',
      text: 'Simple yet elegant. Exactly what I wanted. The healing process was smooth too!'
    },
    {
      id: 6,
      name: 'David P.',
      initial: 'D',
      piece: 'Full Back Piece',
      text: 'Multi-session masterpiece! Worth every penny and every hour. Truly life-changing art.'
    }
  ];
}