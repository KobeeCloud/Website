import { Server, Blocks, Workflow, Globe, BarChart3, Wrench } from 'lucide-react';
import { OfferCard } from '@/components/OfferCard';

const offers = [
  {
    title: 'Infrastruktura jako Kod',
    icon: <Server size={32} />,
    bullets: [
      'Automatyzacja provisioning w chmurze i on-prem',
      'Terraform + Ansible dla powtarzalnych środowisk',
      'Eliminacja ręcznych konfiguracji',
      'Wersjonowanie całej infrastruktury w Git',
      'Szybkie odtwarzanie środowisk (DR)',
    ],
  },
  {
    title: 'Kubernetes & GitOps',
    icon: <Blocks size={32} />,
    bullets: [
      'Wdrożenie klastrów Kubernetes (EKS, GKE, k3s)',
      'Deklaratywne zarządzanie przez ArgoCD/Flux',
      'Automatyczne rollbacki przy błędach',
      'Canary deployments i blue-green',
      'High Availability i auto-scaling',
    ],
  },
  {
    title: 'Automatyzacja CI/CD',
    icon: <Workflow size={32} />,
    bullets: [
      'Pipeline od commit do produkcji',
      'GitHub Actions / GitLab CI / Jenkins',
      'Automatyczne testy i security scanning',
      'Artifact management i registry',
      'Deployment strategies (rolling, canary)',
    ],
  },
  {
    title: 'Tworzenie stron i aplikacji',
    icon: <Globe size={32} />,
    bullets: [
      'Modern stack: Next.js, React, TypeScript',
      'Performance-first architecture',
      'SEO i accessibility best practices',
      'Hosting i CDN (Vercel, Cloudflare)',
      'Full CI/CD integration',
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: <BarChart3 size={32} />,
    bullets: [
      'Grafana + Prometheus + Loki stack',
      'Distributed tracing (Tempo, Jaeger)',
      'Custom dashboards i alerting',
      'SLO/SLI tracking',
      'Incident response automation',
    ],
  },
  {
    title: 'Utrzymanie & Support',
    icon: <Wrench size={32} />,
    bullets: [
      'SLA-based support (99.9%+)',
      '24/7 monitoring i incident response',
      'Regularne audyty bezpieczeństwa',
      'Performance optimization',
      'Dokumentacja i knowledge transfer',
    ],
  },
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            W czym mogę <span className="gradient-text">pomóc</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Pracuję na kontrakcie B2B - dołączam do Twojego teamu jako DevOps Engineer
            i wspieram w automatyzacji, infrastrukturze i deploymentach.
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
            Szukasz DevOps Engineera na projekt lub do teamu?
          </p>
          <a
            href="#kontakt"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all hover:shadow-xl hover:shadow-primary/50"
          >
            Napisz do mnie
          </a>
        </div>
      </div>
    </section>
  );
}
