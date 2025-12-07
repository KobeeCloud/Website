'use client';

import { Server, Blocks, Workflow, Globe, BarChart3, Wrench, Sparkles } from 'lucide-react';
import { OfferCard } from '@/components/OfferCard';

const offers = [
  {
    title: 'Infrastructure as Code',
    icon: <Server size={32} />,
    bullets: [
      'Cloud and on-prem provisioning automation',
      'Terraform + Ansible for repeatable environments',
      'Eliminating manual configurations',
      'Infrastructure versioning in Git',
      'Fast environment recovery (DR)',
    ],
  },
  {
    title: 'Kubernetes & GitOps',
    icon: <Blocks size={32} />,
    bullets: [
      'Kubernetes cluster deployment (EKS, GKE, k3s)',
      'Declarative management with ArgoCD/Flux',
      'Automatic rollbacks on failures',
      'Canary and blue-green deployments',
      'High Availability and auto-scaling',
    ],
  },
  {
    title: 'CI/CD Automation',
    icon: <Workflow size={32} />,
    bullets: [
      'Pipeline from commit to production',
      'GitHub Actions / GitLab CI / Jenkins',
      'Automated tests and security scanning',
      'Artifact management and registry',
      'Deployment strategies (rolling, canary)',
    ],
  },
  {
    title: 'Websites for Small Businesses',
    icon: <Globe size={32} />,
    bullets: [
      'Modern stack: Next.js, React, TypeScript',
      'Responsive, fast, SEO-friendly',
      'Landing pages, business sites',
      'Cloud hosting (Vercel, Cloudflare)',
      'Full deployment and launch',
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: <BarChart3 size={32} />,
    bullets: [
      'Grafana + Prometheus + Loki stack',
      'Distributed tracing (Tempo, Jaeger)',
      'Custom dashboards and alerting',
      'SLO/SLI tracking',
      'Incident response automation',
    ],
  },
  {
    title: 'Maintenance & Support',
    icon: <Wrench size={32} />,
    bullets: [
      'Website and application maintenance',
      'Monitoring and incident response',
      'Regular security audits',
      'Performance optimization',
      'Documentation and technical support',
    ],
  },
];

export function OfferSectionEN() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-in animation-delay-100">
            How I Can <span className="gradient-text">Help</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto animate-fade-in animation-delay-200">
            DevOps for companies and websites for small businesses.
            Contracts, projects, team support, maintenance.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <OfferCard
              key={offer.title}
              title={offer.title}
              icon={offer.icon}
              bullets={offer.bullets}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block p-8 max-w-md mx-auto">
            <p className="text-muted mb-6">
              Looking for a DevOps Engineer for your project or team?
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              <span>Contact Me</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
