'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Jak wygląda współpraca?',
    answer: 'Pracuję na fakturę (kontrakt B2B). Mogę dołączyć do Twojego teamu na full-time lub part-time, albo wziąć konkretny projekt do realizacji. Elastyczne podejście - dopasowuję się do Twoich potrzeb.',
  },
  {
    question: 'Jakie masz doświadczenie?',
    answer: 'Komercyjnie (~2 lata): automatyzacja Azure, Terraform, Ansible, CI/CD (Jenkins, Azure DevOps), build automation (Perl), Vault. Samodzielnie poznałem: Kubernetes (od podstaw po zaawansowane), GitOps (ArgoCD/Flux), monitoring (Prometheus/Grafana/Loki). Dla małych firm tworzę też strony WWW (Next.js, React, TypeScript).',
  },
  {
    question: 'Na jakim stacku pracujesz?',
    answer: 'Głównie Azure, ale AWS i GCP to nie problem. Terraform + Ansible do IaC, Kubernetes + GitOps (ArgoCD/Flux), Jenkins/Azure DevOps/GitHub Actions/CircleCI do CI/CD. Monitoring: Prometheus, Grafana, Splunk, Loki. Języki: Python, Go, Bash, Perl, Groovy.',
  },
  {
    question: 'Czy pomożesz z migracją do chmury?',
    answer: 'Tak! Mam doświadczenie z automatyzacją środowisk w Azure. Mogę pomóc z migracją, audytem obecnej infrastruktury, zaprojektowaniem architektury i wdrożeniem z IaC.',
  },
  {
    question: 'Czy robisz strony WWW dla małych firm?',
    answer: 'Tak! Tworzę nowoczesne strony (Next.js, React, TypeScript) - landing pages, wizytówki, strony firmowe. Pełne wdrożenie w chmurze, SEO, responsywność. Oferuję też maintenance i wsparcie techniczne.',
  },
  {
    question: 'Czy oferujesz długoterminowe wsparcie?',
    answer: 'Tak - mogę dołączyć do teamu na stałe (long-term), zająć się projektem lub zapewnić maintenance stron/aplikacji. Elastyczne formy współpracy.',
  },
  {
    question: 'Gdzie działasz?',
    answer: 'Jestem z Luzina (Trójmiasto) - obsługuję całe Trójmiasto (Gdańsk, Sopot i okolice) oraz pracuję zdalnie z całą Polską.',
  },
  {
    question: 'Jak wyglądają koszty?',
    answer: 'Stawka ustalana indywidualnie w zależności od zakresu pracy, formy współpracy (full-time/part-time/projekt) i długości kontraktu. Napisz - ustalimy szczegóły pod Twoje potrzeby.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Często zadawane <span className="gradient-text">pytania</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Odpowiedzi na najczęstsze pytania. Nie znalazłeś tego czego szukasz? Napisz!
          </p>
        </div>


        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="bg-secondary/50 border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="text-primary flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                <div className="px-6 pb-6 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>


        <div className="text-center mt-12">
          <p className="text-muted mb-6">Masz inne pytanie?</p>
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
