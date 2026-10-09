'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Jak wygląda współpraca?',
    answer: 'Pracuję na fakturę (kontrakt B2B). Mogę dołączyć do Twojego teamu na full-time lub part-time, albo wziąć konkretny projekt do realizacji. Elastyczne podejście - dopasowuję się do Twoich potrzeb.',
    icon: '🤝',
  },
  {
    question: 'Jakie masz doświadczenie?',
    answer: 'Mam około 3 lata doświadczenia komercyjnego w automatyzacji infrastruktury Azure, Terraformie, Ansible, CI/CD (Jenkins, Azure DevOps), automatyzacji buildów i pracy z Vault. Pracuję też z Kubernetesem, GitOps (ArgoCD/Flux) oraz monitoringiem (Prometheus, Grafana, Loki). Dla małych firm tworzę strony w Next.js, React i TypeScript.',
    icon: '💼',
  },
  {
    question: 'Na jakim stacku pracujesz?',
    answer: 'Głównie Azure, ale AWS i GCP to nie problem. Terraform + Ansible do IaC, Kubernetes + GitOps (ArgoCD/Flux), Jenkins/Azure DevOps/GitHub Actions/CircleCI do CI/CD. Monitoring: Prometheus, Grafana, Splunk, Loki. Języki: Python, Go, Bash, Perl, Groovy.',
    icon: '🛠️',
  },
  {
    question: 'Czy pomożesz z migracją do chmury?',
    answer: 'Tak! Mam doświadczenie z automatyzacją środowisk w Azure. Mogę pomóc z migracją, audytem obecnej infrastruktury, zaprojektowaniem architektury i wdrożeniem z IaC.',
    icon: '☁️',
  },
  {
    question: 'Czy robisz strony WWW dla małych firm?',
    answer: 'Tak! Tworzę nowoczesne strony (Next.js, React, TypeScript) - landing pages, wizytówki, strony firmowe. Pełne wdrożenie w chmurze, SEO, responsywność. Oferuję też maintenance i wsparcie techniczne.',
    icon: '🌐',
  },
  {
    question: 'Czy oferujesz długoterminowe wsparcie?',
    answer: 'Tak - mogę dołączyć do teamu na stałe (long-term), zająć się projektem lub zapewnić maintenance stron/aplikacji. Elastyczne formy współpracy.',
    icon: '🔄',
  },
  {
    question: 'Gdzie działasz?',
    answer: 'Jestem z Luzina (Trójmiasto) - obsługuję całe Trójmiasto (Gdańsk, Sopot i okolice) oraz pracuję zdalnie z całą Polską.',
    icon: '📍',
  },
  {
    question: 'Jak wyglądają koszty?',
    answer: 'Stawka ustalana indywidualnie w zależności od zakresu pracy, formy współpracy (full-time/part-time/projekt) i długości kontraktu. Napisz - ustalimy szczegóły pod Twoje potrzeby.',
    icon: '💰',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">FAQ</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-in animation-delay-100">
            Często zadawane <span className="gradient-text">pytania</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Odpowiedzi na najczęstsze pytania. Nie znalazłeś tego czego szukasz? Napisz!
          </p>
        </div>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left transition-colors group-hover:bg-primary/5">
                  <div className="flex items-center gap-4 pr-4">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {faq.icon}
                    </span>
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-primary/20 transition-colors">
                    <ChevronDown
                      size={18}
                      className="text-primary transition-transform duration-300 group-data-[state=open]:rotate-180"
                    />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                <div className="px-6 pb-6 pt-0 ml-14 text-muted leading-relaxed border-l-2 border-primary/20">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="glass-card inline-block p-8 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <p className="text-muted mb-6">Masz inne pytanie?</p>
            <a
              href="#kontakt"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              <span>Napisz do mnie</span>
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
