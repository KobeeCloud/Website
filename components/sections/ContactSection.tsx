'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
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
    <section id="kontakt" className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Zacznijmy <span className="gradient-text">współpracę</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Napisz do mnie - opowiedz o projekcie lub teamie, do którego szukasz wsparcia DevOps.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">

          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Kontakt</h3>
              <div className="space-y-3">
                <p className="text-muted">
                  <span className="font-semibold text-foreground">Jakub Pospieszny</span>
                  <br />
                  KobeCloud
                </p>
                <p className="text-muted">
                  <span className="font-semibold text-foreground">Email:</span>
                  <br />
                  kontakt@kobecloud.pl
                </p>
                <p className="text-muted">
                  <span className="font-semibold text-foreground">Dostępność:</span>
                  <br />
                  Pon-Pt: 9:00 - 18:00
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://github.com/Kobeep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jakub-pospieszny-085a632a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Praca B2B</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Kontrakt B2B - elastyczne formy współpracy</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Pojedyncze projekty lub długoterminowe wsparcie</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Doświadczenie z Azure, AWS, GCP</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Komercyjne projekty B2B</span>
                </li>
              </ul>
            </div>
          </div>


          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-secondary/50 border border-border rounded-xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="jan@firma.pl"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  Firma / Projekt
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Nazwa firmy"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Opisz swoje potrzeby..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-success/10 border border-success/30 rounded-lg text-success text-sm">
                  ✓ Wiadomość wysłana! Odezwę się wkrótce.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-danger/10 border border-danger/30 rounded-lg text-danger text-sm">
                  ✗ Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na kontakt@kobecloud.pl
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary hover:bg-primary-dark disabled:bg-muted text-white rounded-lg font-semibold transition-all hover:shadow-xl hover:shadow-primary/50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Wysyłanie...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Wyślij wiadomość</span>
                  </>
                )}
              </button>

              <p className="text-xs text-muted text-center">
                Przesyłając formularz akceptujesz{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  politykę prywatności
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
