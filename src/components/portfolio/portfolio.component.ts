import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from './image-carousel.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ImageCarouselComponent],
  template: `
    <section id="portfolio" class="py-20 bg-[#1a1a2e]">
      <div class="container mx-auto px-6">
        <h2 class="font-cinzel text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4 scroll-reveal">
          Portfolio
        </h2>
        <p class="text-center text-slate-400 mb-12 scroll-reveal">
          A collection of my recent work
        </p>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-12 scroll-reveal">
          <button
            *ngFor="let cat of categories"
            (click)="setCategory(cat)"
            [class]="'px-5 py-2 rounded-full font-semibold transition-colors ' + (activeCategory === cat ? 'bg-purple-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-purple-600 hover:text-white')">
            {{ cat }}
          </button>
        </div>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div
            *ngFor="let item of filteredItems; trackBy: trackById"
            (click)="openModal(item)"
            class="group relative overflow-hidden rounded-lg shadow-xl border-2 border-purple-900/30 hover:border-purple-500/50 transition-all cursor-pointer">
            <div class="aspect-square bg-slate-800">
              <app-image-carousel [images]="item.images" [alt]="item.title"></app-image-carousel>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
              <div class="p-6 w-full">
                <h3 class="font-cinzel text-xl font-bold text-purple-300 mb-2">{{ item.title }}</h3>
                <p class="text-sm text-slate-300">{{ item.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      *ngIf="selectedItem"
      (click)="closeModal()"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        (click)="$event.stopPropagation()"
        class="bg-[#1a1a2e] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-purple-900/50">

        <!-- Modal Header -->
        <div class="flex justify-between items-center p-4 border-b border-purple-900/30">
          <h3 class="font-cinzel text-2xl font-bold text-purple-400">{{ selectedItem.title }}</h3>
          <button
            (click)="closeModal()"
            class="text-slate-400 hover:text-white transition-colors text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-700">
            &times;
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <!-- Image Carousel -->
          <div class="aspect-video bg-slate-800 rounded-lg overflow-hidden mb-6">
            <app-image-carousel [images]="selectedItem.images" [alt]="selectedItem.title"></app-image-carousel>
          </div>

          <!-- Details -->
          <div class="space-y-4">
            <div>
              <span class="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium">
                {{ selectedItem.category }}
              </span>
            </div>
            <p class="text-slate-300">
              This custom piece showcases intricate detail and artistic craftsmanship.
              Each design is created with care to bring your vision to life.
            </p>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="p-4 border-t border-purple-900/30 bg-[#16162a]">
          <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-[1.02] shadow-lg">
            Book This Design
          </button>
        </div>
      </div>
    </div>
  `
})
export class PortfolioComponent implements OnInit {
  categories = ['All', 'Animals & Creatures', 'Portraits & Figures', 'Nature & Floral', 'Minimalist & Patterns'];
  activeCategory = 'All';
  filteredItems: typeof this.portfolioItems = [];
  selectedItem: typeof this.portfolioItems[0] | null = null;

  portfolioItems = [
    { id: 1, title: 'Mountain/Tree Landscape', category: 'Nature & Floral', images: ['img/4a030e751936cf88fdca781ca19a1605.jpeg'] },
    { id: 2, title: 'Ratchet', category: 'Animals & Creatures', images: ['img/IMG_2413.jpeg'] },
    { id: 3, title: 'Frog Outline', category: 'Animals & Creatures', images: ['img/IMG_3933.jpeg'] },
    { id: 4, title: 'Dark Portrait Woman', category: 'Portraits & Figures', images: ['img/IMG_4010.jpeg'] },
    { id: 5, title: 'Fantasy/Anime Sleeve', category: 'Portraits & Figures', images: ['img/IMG_4732.jpeg'] },
    { id: 6, title: 'Stylized Seahorse', category: 'Animals & Creatures', images: ['img/IMG_4756.jpeg'] },
    { id: 7, title: 'Floral/Bee Sleeve', category: 'Nature & Floral', images: ['img/IMG_4796.jpeg', 'img/IMG_4797.jpeg'] },
    { id: 8, title: 'Tribal Lion Head', category: 'Animals & Creatures', images: ['img/IMG_4855.jpeg'] },
    { id: 9, title: 'Flower & Blue Sun', category: 'Nature & Floral', images: ['img/IMG_5011.jpeg'] },
    { id: 10, title: 'Geometric/Mandala Arm', category: 'Minimalist & Patterns', images: ['img/IMG_5044.jpeg', 'img/IMG_5047.jpeg'] },
    { id: 11, title: 'Cat & Parrot Outline', category: 'Animals & Creatures', images: ['img/IMG_5071.jpeg'] },
    { id: 12, title: 'Cute Cartoon Creatures', category: 'Animals & Creatures', images: ['img/IMG_5126.jpeg', 'img/IMG_5129.jpeg'] },
    { id: 13, title: 'Dragonfly', category: 'Animals & Creatures', images: ['img/IMG_6528.jpeg'] },
    { id: 14, title: 'Octopus/Squid', category: 'Animals & Creatures', images: ['img/IMG_6925.jpeg'] },
    { id: 15, title: 'Line Art Legs', category: 'Portraits & Figures', images: ['img/IMG_8006.jpeg'] },
    { id: 16, title: 'Demon Girl Portrait', category: 'Portraits & Figures', images: ['img/Photoroom_20251024_200316.JPG'] },
    { id: 17, title: 'Wolf & Girl (Princess Mononoke)', category: 'Animals & Creatures', images: ['img/att.CnqtHDOsjoos6NijJVWA1-R3RUS-mlhDh8MfvUNCi_M.jpeg'] },
  ];

  ngOnInit() {
    this.filteredItems = [...this.portfolioItems];
  }

  setCategory(category: string) {
    this.activeCategory = category;
    if (category === 'All') {
      this.filteredItems = [...this.portfolioItems];
    } else {
      this.filteredItems = this.portfolioItems.filter(item => item.category === category);
    }
  }

  trackById(index: number, item: { id: number }) {
    return item.id;
  }

  openModal(item: typeof this.portfolioItems[0]) {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedItem = null;
    document.body.style.overflow = '';
  }
}