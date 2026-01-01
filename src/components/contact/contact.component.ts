import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  // FIX: Set change detection to OnPush for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactComponent {
  private fb: FormBuilder = inject(FormBuilder);
  
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    placement: ['', Validators.required],
    size: ['', Validators.required],
    style: ['Illustrative Blackwork', Validators.required],
    description: ['', Validators.required]
  });

  submitMessage = signal<{ text: string, type: 'success' | 'error' } | null>(null);

  onSubmit(): void {
    this.submitMessage.set(null);
    if (this.contactForm.invalid) {
      this.submitMessage.set({ text: 'Please fill out all required fields correctly.', type: 'error' });
      return;
    }
    
    const formValue = this.contactForm.getRawValue();

    // IMPORTANT: Replace with your actual email address.
    const recipientEmail = 'your-email@example.com';
    const subject = `Tattoo Inquiry from ${formValue.name}`;
    
    const body = `
Hello,

I'd like to inquire about a new tattoo. Here are my details:

- Name: ${formValue.name}
- Email: ${formValue.email}
- Placement: ${formValue.placement}
- Approx. Size: ${formValue.size}
- Style Preference: ${formValue.style}

Description:
${formValue.description}

--------------------------------
This email was pre-filled from your website's contact form.
    `.trim();

    // URI encode the subject and body to handle special characters and line breaks
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's default email client
    window.location.href = mailtoLink;

    this.submitMessage.set({ 
      text: "Your email client has been opened! Please attach any reference images and click 'Send'.", 
      type: 'success' 
    });
  }
}