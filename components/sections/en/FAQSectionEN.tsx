'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the collaboration work?',
    answer: 'I work on invoice (B2B contract). I can join your team full-time or part-time, or take on a specific project. Flexible approach - I adapt to your needs.',
  },
  {
    question: 'What is your experience?',
    answer: 'Commercially (~2 years): Azure automation, Terraform, Ansible, CI/CD (Jenkins, Azure DevOps), build automation (Perl), Vault. Self-taught: Kubernetes (from basics to advanced), GitOps (ArgoCD/Flux), monitoring (Prometheus/Grafana/Loki). For small businesses, I also create websites (Next.js, React, TypeScript).',
  },
  {
    question: 'What stack do you work with?',
    answer: 'Mainly Azure, but AWS and GCP are no problem. Terraform + Ansible for IaC, Kubernetes + GitOps (ArgoCD/Flux), Jenkins/Azure DevOps/GitHub Actions/CircleCI for CI/CD. Monitoring: Prometheus, Grafana, Splunk, Loki. Languages: Python, Go, Bash, Perl, Groovy.',
  },
  {
    question: 'Can you help with cloud migration?',
    answer: 'Yes! I have experience with environment automation in Azure. I can help with migration, current infrastructure audit, architecture design, and IaC implementation.',
  },
  {
    question: 'Do you create websites for small businesses?',
    answer: 'Yes! I create modern websites (Next.js, React, TypeScript) - landing pages, business cards, corporate sites. Full cloud deployment, SEO, responsiveness. I also offer maintenance and technical support.',
  },
  {
    question: 'Do you offer long-term support?',
    answer: 'Yes - I can join the team permanently (long-term), handle a project, or provide website/application maintenance. Flexible forms of cooperation.',
  },
  {
    question: 'Where do you operate?',
    answer: 'I am from Luzino (Tri-City area) - I serve the entire Tri-City (Gdańsk, Sopot and surrounding areas) and work remotely throughout Poland.',
  },
  {
    question: 'What about costs?',
    answer: 'Rate determined individually depending on scope of work, form of cooperation (full-time/part-time/project) and contract length. Write to me - we will arrange details according to your needs.',
  },
];

export function FAQSectionEN() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Answers to the most common questions. Didn't find what you're looking for? Write to me!
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
          <p className="text-muted mb-6">Have another question?</p>
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
