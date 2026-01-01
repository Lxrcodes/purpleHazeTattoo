import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  // FIX: Set change detection to OnPush for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: "Absolutely in love with my new piece. The attention to detail is incredible, and the entire process was professional and comfortable. Can't wait for my next one!",
      author: "Jessica M."
    },
    {
      quote: "Brought my concept to life better than I could have imagined. A true artist who is passionate about their craft. The studio has a great vibe too.",
      author: "David L."
    },
    {
      quote: "My fine line tattoo is so delicate and perfect. I was nervous, but they made me feel completely at ease. Highly recommend for anyone wanting detailed work.",
      author: "Sarah K."
    }
  ];
}
