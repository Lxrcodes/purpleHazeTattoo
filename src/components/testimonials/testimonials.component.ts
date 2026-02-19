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
          <div *ngFor="let testimonial of testimonials; let i = index"
               class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-900/30 hover:border-purple-500/50 transition-all flip-in shadow-lg hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
               [style.transition-delay.ms]="i * 100">
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

        <!-- Google Reviews CTA -->
        <div class="text-center mt-12 scroll-reveal">
          <p class="text-slate-400 mb-4">Had a great experience? Share it with others!</p>
          <a
            [href]="googleReviewUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  // TODO: Replace with actual Google Business review URL once set up
  googleReviewUrl = 'https://g.page/r/PLACEHOLDER/review';

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