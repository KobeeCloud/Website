'use client';

import { useState, useEffect } from 'react';
import { Send, Loader2, Mail, Clock, MapPin, Sparkles, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const cooperationItems = [
  { text: 'B2B Contract - flexible forms', icon: '📄' },
  { text: 'Single projects or long-term support', icon: '🤝' },
  { text: 'Experience with Azure, AWS, GCP', icon: '☁️' },
  { text: 'Commercial projects for companies', icon: '🏢' },
];

export function ContactSectionEN() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (formData.honeypot) {
        console.warn('Bot detected: honeypot field filled');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const timeSpent = Date.now() - formStartTime;
      if (timeSpent < 3000) {
        console.warn('Bot detected: form filled too quickly');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_REPLY!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '', honeypot: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float animation-delay-700" />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">Let&apos;s Talk</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-in animation-delay-100">
            Let&apos;s Start <span className="gradient-text">Working Together</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Write to me - tell me about your project or team that needs DevOps support.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left column - Contact info */}
          <div className="md:col-span-2 space-y-6">
            {/* Contact card */}
            <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">JP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jakub Pospieszny</p>
                    <p className="text-sm text-muted">KobeCloud</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-muted hover:text-primary transition-colors group/item">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">kuba.pospieszny@gmail.com</span>
                </div>

                <div className="flex items-center gap-3 text-muted">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>

                <div className="flex items-center gap-3 text-muted">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">Tri-City / Remote</span>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href="https://github.com/Kobeep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all group/social"
                  >
                    <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jakub-pospieszny-085a632a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all group/social"
                  >
                    <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Cooperation card */}
            <div className="glass-card p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                Forms of Cooperation
              </h4>
              <ul className="space-y-3">
                {cooperationItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors group/item"
                  >
                    <span className="text-lg group-hover/item:scale-110 transition-transform">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              {/* Form fields with floating labels effect */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'top-1 text-xs text-primary'
                      : 'top-3.5 text-sm text-muted'
                  }`}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-6 pb-2 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-muted"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? 'top-1 text-xs text-primary'
                      : 'top-3.5 text-sm text-muted'
                  }`}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-6 pb-2 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-muted"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="company"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'company' || formData.company
                      ? 'top-1 text-xs text-primary'
                      : 'top-3.5 text-sm text-muted'
                  }`}
                >
                  Company / Project
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-6 pb-2 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-muted"
                />
              </div>

              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Leave this field blank</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-1 text-xs text-primary'
                      : 'top-3.5 text-sm text-muted'
                  }`}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-6 pb-2 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none hover:border-muted"
                />
              </div>

              {/* GDPR notice */}
              <div className="glass p-4 rounded-xl">
                <p className="text-xs text-muted leading-relaxed">
                  <strong className="text-foreground">GDPR Notice:</strong><br />
                  Data controller: KobeCloud Jakub Pospieszny, Tax ID: 5882530612, contact: kuba.pospieszny@gmail.com.
                  Your personal data will be processed to respond to your inquiry (legal basis: Art. 6(1)(a) GDPR - consent).
                  You have the right to access, rectify, delete, restrict processing, data portability, and object. Details in{' '}
                  <a href="/en/privacy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </a>.
                </p>
              </div>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 animate-fade-in">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Message sent! I&apos;ll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 animate-fade-in">
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">An error occurred. Please try again or write directly to kuba.pospieszny@gmail.com</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-xs text-muted/70 text-center">
                By submitting the form you consent to the processing of personal data in accordance with{' '}
                <a href="/en/privacy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
