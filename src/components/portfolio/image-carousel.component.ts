import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full group" *ngIf="images?.length">
      <img [src]="images[currentIndex]"
           [alt]="alt"
           class="w-full h-full object-cover transition-opacity duration-300">

      <ng-container *ngIf="images.length > 1">
        <!-- Navigation arrows -->
        <button
          (click)="prev($event)"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous image">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          (click)="next($event)"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next image">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dot indicators -->
        <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          <button
            *ngFor="let img of images; let i = index"
            (click)="goTo(i, $event)"
            [class]="'w-2 h-2 rounded-full transition-all ' + (i === currentIndex ? 'bg-purple-500 w-4' : 'bg-white/60 hover:bg-white')"
            [attr.aria-label]="'Go to image ' + (i + 1)">
          </button>
        </div>
      </ng-container>
    </div>
  `
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];
  @Input() alt: string = '';

  currentIndex = 0;

  prev(event: Event) {
    event.stopPropagation();
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  next(event: Event) {
    event.stopPropagation();
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  goTo(index: number, event: Event) {
    event.stopPropagation();
    this.currentIndex = index;
  }
}
