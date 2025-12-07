import { Search, FileCode, Network, Beaker, Rocket, LineChart, Settings } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    icon: <Search size={24} />,
    description: 'Analiza obecnej infrastruktury, wymagań biznesowych i technicznych. Identyfikacja bottlenecków.',
  },
  {
    number: '02',
    title: 'Audit',
    icon: <FileCode size={24} />,
    description: 'Przegląd bezpieczeństwa, performance, kosztów. Rekomendacje optymalizacji.',
  },
  {
    number: '03',
    title: 'Architecture',
    icon: <Network size={24} />,
    description: 'Projektowanie docelowej architektury. Wybór stack\'u, cloudów, narzędzi.',
  },
  {
    number: '04',
    title: 'PoC',
    icon: <Beaker size={24} />,
    description: 'Proof of Concept dla kluczowych elementów. Weryfikacja założeń na małej skali.',
  },
  {
    number: '05',
    title: 'Implementacja',
    icon: <Rocket size={24} />,
    description: 'Wdrożenie IaC, CI/CD, monitoring. Migracja aplikacji. Testy i rollback plan.',
  },
  {
    number: '06',
    title: 'Monitoring',
    icon: <LineChart size={24} />,
    description: 'Ciągły monitoring SLO/SLI. Alerting i dashboards. Incident response.',
  },
  {
    number: '07',
    title: 'Optymalizacja',
    icon: <Settings size={24} />,
    description: 'Iteracyjne usprawnienia. Performance tuning. Cost optimization. Scaling.',
  },
];

export function ProcessSection() {
  return (
    <section id="proces" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4 border border-primary/20">
            Workflow
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Jak <span className="gradient-text">pracuję</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Typowy workflow projektu - od zrozumienia potrzeb przez implementację po długoterminowe wsparcie.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent animate-pulse-glow" />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                } ${index !== 0 ? 'lg:mt-[-60px]' : ''}`}
              >
                {/* Content card */}
                <div className={`flex-1 lg:pr-16 ${index % 2 !== 0 ? 'lg:pr-0 lg:pl-16' : ''}`}>
                  <div className={`glass-card rounded-2xl p-6 card-hover ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block bg-primary/10 text-primary text-sm font-mono font-bold px-4 py-2 rounded-xl mb-4 border border-primary/20`}>
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 glass rounded-2xl text-primary flex-shrink-0 border-2 border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 group cursor-pointer">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="text-center mt-20">
          <div className="glass-card rounded-3xl p-10 max-w-2xl mx-auto border border-primary/20 hover:border-primary/40 transition-colors duration-500">
            <div className="w-16 h-16 mx-auto mb-6 glass rounded-2xl flex items-center justify-center border border-primary/30">
              <Rocket size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Chcesz porozmawiać o projekcie?
            </h3>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Napisz, opowiedz o Twoich potrzebach i ustalmy szczegóły współpracy.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 btn-primary glow-primary-hover"
            >
              <span>Napisz do mnie</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
