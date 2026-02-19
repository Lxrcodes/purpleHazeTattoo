import { ChangeDetectionStrategy, Component, AfterViewInit, ElementRef, inject, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-portfolio></app-portfolio>
      <app-investment></app-investment>
      <app-testimonials></app-testimonials>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    InvestmentComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all animated elements
    const animatedElements = this.elementRef.nativeElement.querySelectorAll(
      '.scroll-reveal, .fade-left, .fade-right, .zoom-in, .flip-in, .img-reveal'
    );
    animatedElements.forEach((element: Element) => {
      this.observer.observe(element);
    });

    // Preload portfolio images
    this.preloadImages();
  }

  private preloadImages() {
    // Preload all portfolio images immediately for faster loading
    const portfolioImages = [
      'img/4a030e751936cf88fdca781ca19a1605.jpeg',
      'img/IMG_2413.jpeg',
      'img/IMG_3933.jpeg',
      'img/IMG_4010.jpeg',
      'img/IMG_4732.jpeg',
      'img/IMG_4756.jpeg',
      'img/IMG_4796.jpeg',
      'img/IMG_4797.jpeg',
      'img/IMG_4855.jpeg',
      'img/IMG_5011.jpeg',
      'img/IMG_5044.jpeg',
      'img/IMG_5047.jpeg',
      'img/IMG_5071.jpeg',
      'img/IMG_5126.jpeg',
      'img/IMG_5129.jpeg',
      'img/IMG_6528.jpeg',
      'img/IMG_6925.jpeg',
      'img/IMG_8006.jpeg',
      'img/Photoroom_20251024_200316.JPG',
      'img/att.CnqtHDOsjoos6NijJVWA1-R3RUS-mlhDh8MfvUNCi_M.jpeg',
      'img/james-lee-PCAf6sWh7No-unsplash.jpg'
    ];

    // Create hidden Image objects to preload and cache
    portfolioImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}