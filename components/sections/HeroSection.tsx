'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const roles = [
  'DevOps Engineer',
  'Cloud Architect',
  'Infrastructure Expert',
  'Automation Specialist',
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
          <span className="text-sm font-medium text-muted">DevOps • Infrastructure • Automation</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
          <span className="gradient-text inline-block hover:scale-105 transition-transform">KobeCloud</span>
        </h1>

        {/* Typewriter effect */}
        <div className="h-16 sm:h-20 flex items-center justify-center mb-6 animate-fade-in animation-delay-200">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-8 sm:h-10 bg-primary ml-1 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-300 leading-relaxed">
          Automatyzacja infrastruktury, Kubernetes, CI/CD, monitoring.
          <br className="hidden sm:block" />
          Trójmiasto & zdalnie dla całej Polski.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-400">
          <Link
            href="#kontakt"
            className="btn-primary group flex items-center gap-2"
          >
            <span>Porozmawiajmy</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#oferta"
            className="px-8 py-4 rounded-xl font-semibold glass hover:bg-secondary/80 transition-all flex items-center gap-2 group"
          >
            <span>Zobacz ofertę</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in animation-delay-500">
          {[
            { value: '~2', label: 'Lata komercyjnie', icon: '💼' },
            { value: 'Azure', label: 'Główny cloud', icon: '☁️' },
            { value: 'K8s', label: 'Kubernetes', icon: '🚀' },
            { value: 'IaC', label: 'Terraform & Ansible', icon: '🏗️' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-4 group hover:border-primary/50 transition-all"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted" />
      </div>
    </section>
  );
}
