'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Infrastruktura jako kod', href: '#oferta' },
    { name: 'Kubernetes & GitOps', href: '#oferta' },
    { name: 'CI/CD Automation', href: '#oferta' },
    { name: 'Monitoring', href: '#oferta' },
  ],
  company: [
    { name: 'O mnie', href: '#o-firmie' },
    { name: 'Jak pracuję', href: '#proces' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#kontakt' },
  ],
  legal: [
    { name: 'Polityka prywatności', href: '/privacy' },
    { name: 'RODO', href: '/privacy#rodo' },
  ],
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Kobeep',
    icon: Github,
    color: 'hover:bg-gray-700'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jakub-pospieszny-085a632a0/',
    icon: Linkedin,
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Email',
    href: 'mailto:kuba.pospieszny@gmail.com',
    icon: Mail,
    color: 'hover:bg-primary'
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/50 to-secondary/30" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="col-span-1">
            <div className="text-2xl font-bold gradient-text mb-4 inline-block">
              KobeCloud
            </div>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              DevOps Engineer - automatyzacja, infrastruktura, CI/CD dla Twojej firmy.
            </p>

            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-10 h-10 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted hover:text-white hover:border-transparent transition-all duration-300 group ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Usługi
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Informacje
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Prawne
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick contact */}
            <div className="mt-6 p-4 glass rounded-xl">
              <p className="text-xs text-muted mb-2">Szybki kontakt:</p>
              <a
                href="mailto:kuba.pospieszny@gmail.com"
                className="text-sm text-primary hover:underline font-medium"
              >
                kuba.pospieszny@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted text-sm flex items-center justify-center md:justify-start gap-1">
                © {currentYear} KobeCloud. Made with
                <Heart size={14} className="text-red-500 animate-pulse-glow" fill="currentColor" />
                in Trójmiasto
              </p>
            </div>

            {/* Company info */}
            <div className="text-center">
              <p className="text-muted/70 text-xs">
                <span className="text-foreground font-medium">KobeCloud Jakub Pospieszny</span>
                <span className="mx-2">|</span>
                NIP: 5882530612
                <span className="mx-2">|</span>
                REGON: 541797979
              </p>
            </div>

            {/* Back to top */}
            <div className="text-center md:text-right">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted hover:text-primary transition-colors group"
              >
                <span>Powrót na górę</span>
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Address */}
          <p className="text-center text-muted/50 text-xs mt-6">
            Indywidualna działalność gospodarcza | Mickiewicza 19, 84-242 Luzino
          </p>
        </div>
      </div>
    </footer>
  );
}
