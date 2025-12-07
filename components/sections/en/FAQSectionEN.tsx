'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does the collaboration work?',
    answer: 'I work on invoice (B2B contract). I can join your team full-time or part-time, or take on a specific project. Flexible approach - I adapt to your needs.',
    icon: '🤝',
  },
  {
    question: 'What is your experience?',
    answer: 'Commercially (~2 years): Azure automation, Terraform, Ansible, CI/CD (Jenkins, Azure DevOps), build automation (Perl), Vault. Self-taught: Kubernetes (from basics to advanced), GitOps (ArgoCD/Flux), monitoring (Prometheus/Grafana/Loki). For small businesses, I also create websites (Next.js, React, TypeScript).',
    icon: '💼',
  },
  {
    question: 'What stack do you work with?',
    answer: 'Mainly Azure, but AWS and GCP are no problem. Terraform + Ansible for IaC, Kubernetes + GitOps (ArgoCD/Flux), Jenkins/Azure DevOps/GitHub Actions/CircleCI for CI/CD. Monitoring: Prometheus, Grafana, Splunk, Loki. Languages: Python, Go, Bash, Perl, Groovy.',
    icon: '🛠️',
  },
  {
    question: 'Can you help with cloud migration?',
    answer: 'Yes! I have experience with environment automation in Azure. I can help with migration, current infrastructure audit, architecture design, and IaC implementation.',
    icon: '☁️',
  },
  {
    question: 'Do you create websites for small businesses?',
    answer: 'Yes! I create modern websites (Next.js, React, TypeScript) - landing pages, business cards, corporate sites. Full cloud deployment, SEO, responsiveness. I also offer maintenance and technical support.',
    icon: '🌐',
  },
  {
    question: 'Do you offer long-term support?',
    answer: 'Yes - I can join the team permanently (long-term), handle a project, or provide website/application maintenance. Flexible forms of cooperation.',
    icon: '🔄',
  },
  {
    question: 'Where do you operate?',
    answer: 'I am from Luzino (Tri-City area) - I serve the entire Tri-City (Gdańsk, Sopot and surrounding areas) and work remotely throughout Poland.',
    icon: '📍',
  },
  {
    question: 'What about costs?',
    answer: 'Rate determined individually depending on scope of work, form of cooperation (full-time/part-time/project) and contract length. Write to me - we will arrange details according to your needs.',
    icon: '💰',
  },
];

export function FAQSectionEN() {
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Answers to the most common questions. Didn&apos;t find what you&apos;re looking for? Write to me!
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
            <p className="text-muted mb-6">Have another question?</p>
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
