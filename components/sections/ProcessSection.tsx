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
    <section id="proces" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Jak <span className="gradient-text">pracuję</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Typowy workflow projektu - od zrozumienia potrzeb przez implementację po długoterminowe wsparcie.
          </p>
        </div>

        
        <div className="relative">
          
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />

          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                <div className="flex-1 lg:text-right lg:pr-12">
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:pl-12 lg:pr-0'}`}>
                    <div className="inline-block bg-primary/10 text-primary text-sm font-mono font-bold px-3 py-1 rounded mb-3">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted">{step.description}</p>
                  </div>
                </div>

                
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-secondary border-2 border-primary rounded-full text-primary flex-shrink-0">
                  {step.icon}
                </div>

                
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        
        <div className="text-center mt-16 p-8 bg-secondary/50 border border-border rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Chcesz porozmawiać o projekcie?
          </h3>
          <p className="text-muted mb-6">
            Napisz, opowiedz o Twoich potrzebach i ustalmy szczegóły.
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
