'use client';

import { Award, Clock, Shield, Users, Sparkles, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Commercial Projects',
    description: '~2 years experience in Azure infrastructure automation, Terraform, Ansible, CI/CD (Jenkins, Azure DevOps).',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Self-taught Expertise',
    description: 'Kubernetes, GitOps (ArgoCD/Flux), monitoring (Prometheus/Grafana) - learned independently through practice and personal projects.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Clock,
    title: 'Pragmatic Approach',
    description: 'Combining commercial experience with self-acquired knowledge. Deployments based on best practices.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Continuous Learning',
    description: 'DevOps enthusiast - constantly experimenting with new tools, reading documentation, building proof-of-concepts.',
    color: 'from-orange-500 to-amber-500',
  },
];

const stats = [
  { value: 'Azure', label: 'Main Specialization', icon: '☁️' },
  { value: 'CI/CD', label: 'Jenkins, Azure DevOps', icon: '🔄' },
  { value: 'IaC', label: 'Terraform & Ansible', icon: '🏗️' },
  { value: 'GitOps', label: 'ArgoCD & Flux', icon: '🚀' },
];

const competencies = [
  { text: 'Microsoft Azure (main specialization) + AWS & GCP', preferred: false },
  { text: 'Infrastructure as Code (Terraform, Ansible)', preferred: false },
  { text: 'Cloud Platforms (Azure, AWS, GCP)', preferred: 'Azure' },
  { text: 'Kubernetes & GitOps (ArgoCD, Flux)', preferred: false },
  { text: 'CI/CD (Jenkins, Azure DevOps, GitHub Actions, CircleCI)', preferred: false },
  { text: 'Monitoring (Prometheus, Grafana, Splunk, Loki)', preferred: false },
  { text: 'Security & Secrets (HashiCorp Vault, best practices)', preferred: false },
  { text: 'Scripting (Bash, Python, Go, Perl, Groovy)', preferred: 'Bash' },
  { text: 'Databases (PostgreSQL, PL/pgSQL)', preferred: false },
];

export function AboutSectionEN() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">Get to know me</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-in animation-delay-100">
            About <span className="gradient-text">KobeCloud</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-2 animate-fade-in animation-delay-200">
            DevOps Engineer from Tri-City - infrastructure automation, Kubernetes, CI/CD, monitoring.
          </p>
          <p className="text-lg text-muted/80 animate-fade-in animation-delay-300">
            <span className="font-semibold text-foreground">Jakub Pospieszny</span> - ~2 years commercially + passionate self-learner
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left column - Experience */}
          <div className="space-y-6">
            <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Commercial Experience</h3>
              </div>
              <div className="space-y-2 text-muted text-sm">
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse-glow" />
                  Infrastructure automation in Azure (Terraform, Ansible)
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse-glow animation-delay-100" />
                  Build & Deployment automation (Perl, Jenkins, Vault)
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse-glow animation-delay-200" />
                  CI/CD pipelines (Azure DevOps, GitHub Actions)
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse-glow animation-delay-300" />
                  Working with teams on production system stability
                </p>
              </div>
            </div>

            <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Self-learning</h3>
              </div>
              <div className="space-y-2 text-muted text-sm">
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0 animate-pulse-glow" />
                  Kubernetes - from basics to advanced deployments
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0 animate-pulse-glow animation-delay-100" />
                  GitOps (ArgoCD, Flux) - declarative management
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0 animate-pulse-glow animation-delay-200" />
                  Monitoring stack (Prometheus, Grafana, Loki)
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0 animate-pulse-glow animation-delay-300" />
                  Websites (Next.js, React, TypeScript)
                </p>
              </div>
            </div>

            <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Location</h3>
              </div>
              <p className="text-muted text-sm">
                Luzino, serving the entire <span className="text-foreground font-medium">Tri-City area</span> and working <span className="text-foreground font-medium">remotely</span>.
                For small businesses, I also offer website development, deployment, and maintenance.
              </p>
            </div>

            {/* Competencies */}
            <div className="glass-card p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                Key Competencies
              </h4>
              <ul className="space-y-2 text-sm text-muted">
                {competencies.map((comp, i) => (
                  <li key={i} className="flex items-start group/item hover:text-foreground transition-colors">
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>
                      {comp.text}
                      {comp.preferred && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-2 animate-pulse-glow">
                          {comp.preferred === true ? 'Preferred' : comp.preferred}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Feature cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass-card p-6 group card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card text-center p-6 group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-card inline-block p-8 max-w-md mx-auto">
            <p className="text-muted mb-6">
              Want to learn more or discuss your project?
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
