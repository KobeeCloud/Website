'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, BriefcaseBusiness, Boxes, Cloud, Workflow } from 'lucide-react';
import Link from 'next/link';
import { HeroScene } from '@/components/HeroScene';

const roles = [
  'DevOps Engineer',
  'Cloud Engineer',
  'Platform Engineer',
  'CI/CD Automation',
];

export function HeroSectionEN() {
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
          <h1 id="hero-title">Stable cloud.<br /><span>Reliable releases.</span></h1>
          <div className="hero-role" aria-live="polite">{displayText}<span /></div>
          <p className="hero-description">
            I build and automate Azure infrastructure, CI/CD pipelines, and monitoring.
            I help teams reduce manual operations and ship changes with confidence.
          </p>
          <div className="hero-actions">
            <Link href="#contact" className="hero-button hero-button-primary">Let&apos;s talk <ArrowRight size={17} /></Link>
            <Link href="#services" className="hero-button hero-button-secondary">Explore services <ArrowDown size={16} /></Link>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>01</span> / 04</div>
        <div className="hero-stats">
          <div><BriefcaseBusiness /><strong>~3 years</strong><span>commercial experience</span></div>
          <div><Cloud /><strong>Azure</strong><span>primary cloud platform</span></div>
          <div><Boxes /><strong>Kubernetes</strong><span>container orchestration</span></div>
          <div><Workflow /><strong>Terraform</strong><span>infrastructure as code</span></div>
        </div>
      </div>
      <a className="hero-scroll" href="#services"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      </div>
    </section>
  );
}
