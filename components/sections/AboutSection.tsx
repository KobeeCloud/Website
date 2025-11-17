import { Award, Clock, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: <Award size={32} />,
    title: 'Komercyjne projekty',
    description: '~2 lata doświadczenia w automatyzacji infrastruktury Azure, Terraform, Ansible, CI/CD (Jenkins, Azure DevOps).',
  },
  {
    icon: <Shield size={32} />,
    title: 'Self-taught expertise',
    description: 'Kubernetes, GitOps (ArgoCD/Flux), monitoring (Prometheus/Grafana) - poznane samodzielnie przez praktykę i projekty własne.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Pragmatyczne podejście',
    description: 'Łączę komercyjne doświadczenie z samodzielnie zdobytą wiedzą. Wdrożenia oparte na best practices.',
  },
  {
    icon: <Users size={32} />,
    title: 'Ciągła nauka',
    description: 'Pasjonat DevOps - stale eksperymentuję z nowymi narzędziami, czytam dokumentacje, buduję proof-of-concepts.',
  },
];

const stats = [
  { value: 'Azure', label: 'Główna specjalizacja' },
  { value: 'CI/CD', label: 'Jenkins, Azure DevOps' },
  { value: 'IaC', label: 'Terraform & Ansible' },
  { value: 'GitOps', label: 'ArgoCD & Flux' },
];

export function AboutSection() {
  return (
    <section id="o-firmie" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            O <span className="gradient-text">KobeCloud</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-2">
            DevOps Engineer z Trójmiasta - automatyzacja infrastruktury, Kubernetes, CI/CD, monitoring.
          </p>
          <p className="text-lg text-muted/80">
            <span className="font-semibold text-foreground">Jakub Pospieszny</span> - ~2 lata komercyjnie + pasjonat self-learningu
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Doświadczenie</h3>
              <div className="space-y-4 text-muted">
                <p>
                  <strong className="text-foreground">Komercyjnie (~2 lata):</strong>
                  <br />• Automatyzacja infrastruktury w Azure (Terraform, Ansible)
                  <br />• Build & Deployment automation (Perl, Jenkins, Vault)
                  <br />• CI/CD pipelines (Azure DevOps, GitHub Actions)
                  <br />• Praca z zespołami nad stabilnością systemów produkcyjnych
                </p>
                <p>
                  <strong className="text-foreground">Samodzielna nauka i projekty:</strong>
                  <br />• Kubernetes - od podstaw po zaawansowane wdrożenia
                  <br />• GitOps (ArgoCD, Flux) - deklaratywne zarządzanie
                  <br />• Monitoring stack (Prometheus, Grafana, Loki)
                  <br />• Strony WWW (Next.js, React, TypeScript) - tworzenie i wdrożenia
                </p>
                <p>
                  <strong className="text-foreground">Lokalizacja:</strong> Luzino (Trójmiasto), obsługuję całe Trójmiasto i zdalnie.
                  Dla małych firm oferuję również tworzenie stron WWW, wdrożenia i maintenance.
                </p>
              </div>
            </div>            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Kluczowe kompetencje:</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Microsoft Azure (główna specjalizacja) + AWS & GCP</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Infrastructure as Code (Terraform, Ansible)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Cloud Platforms (Azure <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-1">Preferowane</span>, AWS, GCP)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Kubernetes & GitOps (ArgoCD, Flux)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>CI/CD (Jenkins, Azure DevOps, GitHub Actions, CircleCI)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Monitoring (Prometheus, Grafana, Splunk, Loki)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Security & Secrets (HashiCorp Vault, best practices)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Scripting (Bash <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-1">Preferowane</span>, Python, Go, Perl, Groovy)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Databases (PostgreSQL, PL/pgSQL)</span>
                </li>
              </ul>
            </div>
          </div>


          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-secondary/50 border border-border rounded-xl"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>


        <div className="text-center mt-16">
          <p className="text-muted mb-6">
            Chcesz dowiedzieć się więcej lub omówić swój projekt?
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
