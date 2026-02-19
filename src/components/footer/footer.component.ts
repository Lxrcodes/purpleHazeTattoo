import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#0f0f1e] border-t border-purple-900/30 py-8">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 class="font-cinzel text-xl font-bold text-purple-400 mb-3">Purple Haze Tattoos</h3>
            <p class="text-slate-400 text-sm">
              Creating custom illustrative and fine line tattoos in Perth, Western Australia.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-purple-300 mb-3">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><button (click)="scrollTo('home')" class="text-slate-400 hover:text-purple-400 transition-colors cursor-pointer">Home</button></li>
              <li><button (click)="scrollTo('about')" class="text-slate-400 hover:text-purple-400 transition-colors cursor-pointer">About</button></li>
              <li><button (click)="scrollTo('portfolio')" class="text-slate-400 hover:text-purple-400 transition-colors cursor-pointer">Portfolio</button></li>
              <li><button (click)="scrollTo('contact')" class="text-slate-400 hover:text-purple-400 transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-purple-300 mb-3">Business Hours</h4>
            <p class="text-slate-400 text-sm mb-2">By Appointment Only</p>
            <p class="text-slate-400 text-sm">Tuesday - Saturday</p>
            <p class="text-slate-400 text-sm">10:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div class="border-t border-purple-900/30 pt-6 text-center">
          <p class="text-slate-500 text-sm">
            &copy; {{ currentYear }} Purple Haze Tattoos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}