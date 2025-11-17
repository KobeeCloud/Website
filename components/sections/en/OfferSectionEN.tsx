import { Server, Blocks, Workflow, Globe, BarChart3, Wrench } from 'lucide-react';
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
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How I Can <span className="gradient-text">Help</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            DevOps for companies and websites for small businesses.
            Contracts, projects, team support, maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <OfferCard
              key={offer.title}
              title={offer.title}
              icon={offer.icon}
              bullets={offer.bullets}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted mb-6">
            Looking for a DevOps Engineer for your project or team?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all hover:shadow-xl hover:shadow-primary/50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
