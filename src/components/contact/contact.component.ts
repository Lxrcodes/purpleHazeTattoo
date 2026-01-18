import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 bg-[#16213e]">
      <div class="container mx-auto px-6">
        <h2 class="font-cinzel text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4 scroll-reveal">
          Get In Touch
        </h2>
        <p class="text-center text-slate-400 mb-12 scroll-reveal">
          Ready to start your tattoo journey? Let's create something amazing together.
        </p>

        <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Form -->
          <div class="scroll-reveal">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label class="block text-purple-300 mb-2 font-semibold">Name *</label>
                <input 
                  type="text" 
                  formControlName="name"
                  class="w-full bg-slate-800 border border-purple-900/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name">
                <p *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-red-400 text-sm mt-1">Name is required</p>
              </div>

              <div>
                <label class="block text-purple-300 mb-2 font-semibold">Email *</label>
                <input 
                  type="email" 
                  formControlName="email"
                  class="w-full bg-slate-800 border border-purple-900/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com">
                <p *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-red-400 text-sm mt-1">Valid email is required</p>
              </div>

              <div>
                <label class="block text-purple-300 mb-2 font-semibold">Phone</label>
                <input 
                  type="tel" 
                  formControlName="phone"
                  class="w-full bg-slate-800 border border-purple-900/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="(optional)">
              </div>

              <div>
                <label class="block text-purple-300 mb-2 font-semibold">Tattoo Idea *</label>
                <textarea 
                  formControlName="message"
                  rows="5"
                  class="w-full bg-slate-800 border border-purple-900/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Describe your tattoo idea, including size, placement, and style preferences..."></textarea>
                <p *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" class="text-red-400 text-sm mt-1">Please describe your tattoo idea</p>
              </div>

              <div>
                <label class="block text-purple-300 mb-2 font-semibold">Preferred Budget Range</label>
                <select 
                  formControlName="budget"
                  class="w-full bg-slate-800 border border-purple-900/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors">
                  <option value="">Select a range</option>
                  <option value="150-300">$150 - $300</option>
                  <option value="300-600">$300 - $600</option>
                  <option value="600-1000">$600 - $1,000</option>
                  <option value="1000+">$1,000+</option>
                </select>
              </div>

              <button 
                type="submit"
                [disabled]="contactForm.invalid || isSubmitting"
                class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 shadow-lg">
                <span *ngIf="isSubmitting">Sending...</span>
                <span *ngIf="!isSubmitting && isSubmitted"><i class="fas fa-check mr-2"></i>Message Sent!</span>
                <span *ngIf="!isSubmitting && !isSubmitted">Send Consultation Request</span>
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="scroll-reveal space-y-8">
            <div>
              <h3 class="font-cinzel text-2xl font-bold text-purple-300 mb-6">Studio Information</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="fas fa-map-marker-alt text-purple-400 mt-1 mr-4 text-xl"></i>
                  <div>
                    <p class="font-semibold text-purple-200">Location</p>
                    <p class="text-slate-400">Perth, Western Australia</p>
                    <p class="text-sm text-slate-500">(Exact address provided upon booking)</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-clock text-purple-400 mt-1 mr-4 text-xl"></i>
                  <div>
                    <p class="font-semibold text-purple-200">Hours</p>
                    <p class="text-slate-400">By Appointment Only</p>
                    <p class="text-sm text-slate-500">Tue-Sat: 10am - 6pm</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-envelope text-purple-400 mt-1 mr-4 text-xl"></i>
                  <div>
                    <p class="font-semibold text-purple-200">Email</p>
                    <p class="text-slate-400">info&#64;purplehazetattoos.com.au</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-slate-800/50 rounded-xl p-6 border border-purple-900/30">
              <h4 class="font-cinzel text-xl font-bold text-purple-300 mb-4">Follow the Journey</h4>
              <div class="flex gap-4">
                <a href="#" class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <i class="fab fa-instagram text-white text-xl"></i>
                </a>
                <a href="#" class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <i class="fab fa-facebook text-white text-xl"></i>
                </a>
                <a href="#" class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <i class="fab fa-tiktok text-white text-xl"></i>
                </a>
              </div>
              <p class="text-sm text-slate-400 mt-4">
                &#64;purplehazetattoos - Daily updates, flash designs, and behind-the-scenes content
              </p>
            </div>

            <div class="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
              <h4 class="font-bold text-purple-200 mb-2">Important Note</h4>
              <p class="text-sm text-slate-300">
                All consultations are free. A non-refundable deposit is required to secure your appointment. 
                Please provide reference images when possible to help bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  
  isSubmitting = false;
  isSubmitted = false;

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required],
    budget: ['']
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          this.isSubmitted = false;
        }, 3000);
      }, 1500);
    }
  }
}