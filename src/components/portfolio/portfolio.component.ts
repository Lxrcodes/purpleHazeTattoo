import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface PortfolioItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  // FIX: Set change detection to OnPush for better performance, especially with signals.
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage],
})
export class PortfolioComponent {
  selectedImage = signal<PortfolioItem | null>(null);

  modalImageUrl = computed(() => {
    const item = this.selectedImage();
    // Return the src directly for the modal, as it's a local path or external URL.
    return item ? item.src : '';
  });

  // TODO: Replace these placeholder images with your actual work.
  // You can duplicate the objects in this array to add more images to your portfolio.
  portfolioItems: PortfolioItem[] = [
    { src: 'https://picsum.photos/id/101/500/750', alt: 'Placeholder for your tattoo work. Describe the piece here.', width: 500, height: 750 },
    { src: 'https://picsum.photos/id/102/500/650', alt: 'Placeholder for your tattoo work. Describe the piece here.', width: 500, height: 650 },
    { src: 'https://picsum.photos/id/103/500/500', alt: 'Placeholder for your tattoo work. Describe the piece here.', width: 500, height: 500 },
    { src: 'https://picsum.photos/id/104/500/800', alt: 'Placeholder for your tattoo work. Describe the piece here.', width: 500, height: 800 },
  ];

  openModal(item: PortfolioItem): void {
    this.selectedImage.set(item);
  }

  closeModal(): void {
    this.selectedImage.set(null);
  }
}