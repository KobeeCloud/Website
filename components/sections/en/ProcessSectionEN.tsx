'use client';

import { Search, FileCode, Network, Beaker, Rocket, LineChart, Settings, Sparkles } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description: 'Analysis of current infrastructure, business and technical requirements. Identifying bottlenecks.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Audit',
    icon: FileCode,
    description: 'Security, performance, and cost review. Optimization recommendations.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    number: '03',
    title: 'Architecture',
    icon: Network,
    description: 'Target architecture design. Stack, cloud, and tooling selection.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    number: '04',
    title: 'PoC',
    icon: Beaker,
    description: 'Proof of Concept for key elements. Validating assumptions on a small scale.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    number: '05',
    title: 'Implementation',
    icon: Rocket,
    description: 'IaC, CI/CD, monitoring implementation. Application migration. Testing and rollback plan.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    number: '06',
    title: 'Monitoring',
    icon: LineChart,
    description: 'Continuous SLO/SLI monitoring. Alerting and dashboards. Incident response.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    number: '07',
    title: 'Optimization',
    icon: Settings,
    description: 'Iterative improvements. Performance tuning. Cost optimization. Scaling.',
    color: 'from-cyan-500 to-teal-500',
  },
];

export function ProcessSectionEN() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />

      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">Workflow</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-in animation-delay-100">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Typical project workflow - from understanding needs through implementation to long-term support.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/50 to-transparent animate-pulse-glow" />
          </div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`glass-card p-6 group hover:border-primary/30 transition-all duration-300 ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group hover:scale-110 transition-transform cursor-default`}>
                      <Icon className="w-7 h-7 text-white" />
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-50 blur-xl group-hover:opacity-75 transition-opacity`} />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Want to discuss a project?
            </h3>
            <p className="text-muted mb-6">
              Write to me, tell me about your needs and let&apos;s work out the details.
            </p>
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
