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
    title: 'Strony WWW dla małych firm',
    icon: <Globe size={32} />,
    bullets: [
      'Modern stack: Next.js, React, TypeScript',
      'Responsywne, szybkie, SEO-friendly',
      'Landing pages, wizytówki, strony firmowe',
      'Hosting w chmurze (Vercel, Cloudflare)',
      'Pełne wdrożenie i uruchomienie',
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
    title: 'Maintenance & Support',
    icon: <Wrench size={32} />,
    bullets: [
      'Utrzymanie stron i aplikacji WWW',
      'Monitoring i incident response',
      'Regularne audyty bezpieczeństwa',
      'Performance optimization',
      'Dokumentacja i wsparcie techniczne',
    ],
  },
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4 border border-primary/20">
            Usługi
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            W czym mogę <span className="gradient-text">pomóc</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            DevOps dla firm oraz strony WWW dla małych biznesów.
            Kontrakty, projekty, wsparcie zespołów, maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="text-center mt-16">
          <div className="glass-card inline-block rounded-2xl p-8">
            <p className="text-muted mb-6">
              Szukasz DevOps Engineera na projekt lub do teamu?
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 btn-primary glow-primary-hover"
            >
              <span>Napisz do mnie</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
