import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="investment" class="py-20 bg-[#16213e]">
      <div class="container mx-auto px-6">
        <h2 class="font-cinzel text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4 scroll-reveal">
          Investment
        </h2>
        <p class="text-center text-slate-400 mb-12 max-w-2xl mx-auto scroll-reveal">
          Quality artistry is an investment in yourself. Pricing varies based on size, complexity, and placement.
        </p>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <div *ngFor="let tier of pricingTiers" class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border-2 border-purple-900/50 hover:border-purple-500/70 transition-all scroll-reveal shadow-xl">
            <div class="text-center mb-6">
              <i [class]="tier.icon + ' text-5xl text-purple-400 mb-4'"></i>
              <h3 class="font-cinzel text-2xl font-bold text-purple-300 mb-2">{{ tier.name }}</h3>
              <p class="text-slate-400 mb-4">{{ tier.description }}</p>
              <div class="text-3xl font-bold text-purple-400">{{ tier.price }}</div>
              <p class="text-sm text-slate-500">{{ tier.priceNote }}</p>
            </div>
            <ul class="space-y-3">
              <li *ngFor="let feature of tier.features" class="flex items-start">
                <i class="fas fa-star text-purple-400 mt-1 mr-3 text-sm"></i>
                <span class="text-slate-300">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="max-w-4xl mx-auto bg-slate-800/50 rounded-xl p-8 border border-purple-900/30 scroll-reveal">
          <h3 class="font-cinzel text-2xl font-bold text-purple-300 mb-6 text-center">
            What's Included
          </h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start">
              <i class="fas fa-check-circle text-purple-400 mt-1 mr-3"></i>
              <div>
                <h4 class="font-semibold text-purple-200 mb-1">Free Consultation</h4>
                <p class="text-slate-400 text-sm">Discuss your vision and get expert advice</p>
              </div>
            </div>
            <div class="flex items-start">
              <i class="fas fa-check-circle text-purple-400 mt-1 mr-3"></i>
              <div>
                <h4 class="font-semibold text-purple-200 mb-1">Custom Design</h4>
                <p class="text-slate-400 text-sm">Unique artwork created just for you</p>
              </div>
            </div>
            <div class="flex items-start">
              <i class="fas fa-check-circle text-purple-400 mt-1 mr-3"></i>
              <div>
                <h4 class="font-semibold text-purple-200 mb-1">Aftercare Kit</h4>
                <p class="text-slate-400 text-sm">Premium products for optimal healing</p>
              </div>
            </div>
            <div class="flex items-start">
              <i class="fas fa-check-circle text-purple-400 mt-1 mr-3"></i>
              <div>
                <h4 class="font-semibold text-purple-200 mb-1">Touch-Up Session</h4>
                <p class="text-slate-400 text-sm">Complimentary touch-up within 6 months</p>
              </div>
            </div>
          </div>
        </div>

        <p class="text-center text-slate-400 mt-8 scroll-reveal">
          Deposit required to secure your appointment. Payment plans available for larger pieces.
        </p>
      </div>
    </section>
  `
})
export class InvestmentComponent {
  pricingTiers = [
    {
      name: 'Small & Simple',
      description: 'Perfect for first-timers',
      price: '$150+',
      priceNote: 'Starting price',
      icon: 'fas fa-feather',
      features: [
        'Up to 2" size',
        'Simple line work',
        'Minimal detail',
        '1-2 hour session'
      ]
    },
    {
      name: 'Medium Detail',
      description: 'Most popular choice',
      price: '$300+',
      priceNote: 'Typical range $300-$600',
      icon: 'fas fa-palette',
      features: [
        '3-6" size',
        'Detailed work',
        'Shading & effects',
        '3-5 hour session'
      ]
    },
    {
      name: 'Large & Complex',
      description: 'Statement pieces',
      price: '$800+',
      priceNote: 'Custom quote',
      icon: 'fas fa-crown',
      features: [
        '6"+ or multi-session',
        'Intricate details',
        'Full coverage',
        'Multiple sessions'
      ]
    }
  ];
}