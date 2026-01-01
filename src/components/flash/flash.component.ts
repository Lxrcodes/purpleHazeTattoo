import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  // FIX: Set change detection to OnPush for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage],
})
export class FlashComponent {
  // NOTE: Using local paths as requested. Please verify these file names match your `src/img` folder.
  flashDesigns = [
    {
      src: 'src/img/flash-1.jpg',
      alt: 'Ghibli-inspired Soot Sprite holding a star'
    },
    {
      src: 'src/img/flash-2.jpg',
      alt: 'A small, sleeping fox curled up'
    },
    {
      src: 'src/img/flash-3.jpg',
      alt: 'Blackwork crystal dagger with floral hilt'
    },
    {
      src: 'src/img/flash-4.jpg',
      alt: 'Miniature retro game controller'
    }
  ];
}