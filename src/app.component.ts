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
    const images = this.elementRef.nativeElement.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset['src']) {
            img.src = img.dataset['src'];
            img.removeAttribute('data-src');
          }
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    images.forEach((img: Element) => imageObserver.observe(img));
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}