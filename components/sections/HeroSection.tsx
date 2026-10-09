'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, BriefcaseBusiness, Boxes, Cloud, Workflow } from 'lucide-react';
import Link from 'next/link';
import { HeroScene } from '@/components/HeroScene';

const roles = [
  'DevOps Engineer',
  'Inżynier Cloud',
  'Platform Engineer',
  'Automatyzacja CI/CD',
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
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 50);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-stage">
      <HeroScene />
      <div className="hero-grain" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span /> DevOps · Cloud · Automation</p>
          <h1 id="hero-title">Stabilna chmura.<br /><span>Pewne wdrożenia.</span></h1>
          <div className="hero-role" aria-live="polite">{displayText}<span /></div>
          <p className="hero-description">
            Projektuję i automatyzuję infrastrukturę Azure, procesy CI/CD oraz monitoring.
            Pomagam zespołom ograniczać ręczne operacje i bezpieczniej dostarczać zmiany.
          </p>
          <div className="hero-actions">
            <Link href="#kontakt" className="hero-button hero-button-primary">Porozmawiajmy <ArrowRight size={17} /></Link>
            <Link href="#oferta" className="hero-button hero-button-secondary">Poznaj ofertę <ArrowDown size={16} /></Link>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>01</span> / 04</div>
        <div className="hero-stats">
          <div><BriefcaseBusiness /><strong>~3 lata</strong><span>doświadczenia komercyjnego</span></div>
          <div><Cloud /><strong>Azure</strong><span>główna platforma cloud</span></div>
          <div><Boxes /><strong>Kubernetes</strong><span>orkiestracja kontenerów</span></div>
          <div><Workflow /><strong>Terraform</strong><span>infrastruktura jako kod</span></div>
        </div>
      </div>
      <a className="hero-scroll" href="#oferta"><span>Przewiń, aby odkryć</span><ArrowDown size={15} /></a>
      </div>
    </section>
  );
}
