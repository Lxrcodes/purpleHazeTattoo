import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  // FIX: Set change detection to OnPush for better performance, especially with signals.
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class InvestmentComponent {
  openAccordion = signal<string | null>(null);

  toggleAccordion(section: string): void {
    this.openAccordion.update(current => (current === section ? null : section));
  }
}
