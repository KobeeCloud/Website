'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';

const navigationPL = [
  { name: 'Oferta', href: '#oferta' },
  { name: 'Proces', href: '#proces' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'O firmie', href: '#o-firmie' },
  { name: 'FAQ', href: '#faq' },
];

const navigationEN = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');

  const navigation = isEnglish ? navigationEN : navigationPL;
  const contactHref = isEnglish ? '#contact' : '#kontakt';
  const contactText = isEnglish ? 'Contact' : 'Kontakt';
  const homeHref = isEnglish ? '/en' : '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'glass border-b border-primary/10 shadow-2xl shadow-black/10'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">

          <Link href={homeHref} className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              KobeCloud
            </div>
          </Link>


          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 py-2 group"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href={contactHref}
              className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 btn-primary"
            >
              {contactText}
            </Link>
          </div>


          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 text-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-xl"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={cn(
                "absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "top-3 rotate-45" : "top-1"
              )} />
              <span className={cn(
                "absolute left-0 top-3 block w-6 h-0.5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )} />
              <span className={cn(
                "absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "top-3 -rotate-45" : "top-5"
              )} />
            </div>
          </button>
        </div>


        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-1 pt-4 border-t border-primary/10">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-2 px-4">
              <LanguageSwitcher />
            </div>
            <Link
              href={contactHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mx-4 px-5 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-semibold text-center transition-all duration-300 btn-primary"
            >
              {contactText}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
