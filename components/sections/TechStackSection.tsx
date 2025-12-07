'use client';

import { useState } from 'react';
import {
  SiAmazon, SiGooglecloud, SiTerraform, SiAnsible,
  SiKubernetes, SiDocker, SiArgo, SiFlux,
  SiJenkins, SiGithubactions, SiCircleci, SiGitlab,
  SiPrometheus, SiGrafana, SiSplunk, SiVault,
  SiPython, SiGo, SiGnubash, SiPerl,
  SiPostgresql, SiJira, SiGithub, SiPerforce,
} from 'react-icons/si';
import { FileCode, Workflow, Cloud } from 'lucide-react';

const techStack = {
  'Cloud & Infrastructure': [
    { name: 'Azure', description: 'Primary Cloud Platform', icon: Cloud, color: '#0089D6' },
    { name: 'AWS', description: 'Cloud Provider', icon: SiAmazon, color: '#FF9900' },
    { name: 'GCP', description: 'Cloud Provider', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Terraform', description: 'Infrastructure as Code', icon: SiTerraform, color: '#7B42BC' },
    { name: 'Ansible', description: 'Configuration Management', icon: SiAnsible, color: '#EE0000' },
  ],
  'Container & Orchestration': [
    { name: 'Kubernetes', description: 'Container Orchestration', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Docker', description: 'Containerization', icon: SiDocker, color: '#2496ED' },
    { name: 'ArgoCD', description: 'GitOps CD', icon: SiArgo, color: '#EF7B4D' },
    { name: 'Flux', description: 'GitOps Operator', icon: SiFlux, color: '#5468FF' },
  ],
  'CI/CD & Automation': [
    { name: 'Jenkins', description: 'Automation Server', icon: SiJenkins, color: '#D24939' },
    { name: 'Azure DevOps', description: 'CI/CD Platform', icon: Workflow, color: '#0078D7' },
    { name: 'GitHub Actions', description: 'CI/CD Workflows', icon: SiGithubactions, color: '#2088FF' },
    { name: 'CircleCI', description: 'CI/CD Platform', icon: SiCircleci, color: '#343434' },
    { name: 'GitLab CI', description: 'CI/CD Platform', icon: SiGitlab, color: '#FC6D26' },
  ],
  'Monitoring & Security': [
    { name: 'Prometheus', description: 'Metrics & Alerting', icon: SiPrometheus, color: '#E6522C' },
    { name: 'Grafana', description: 'Visualization', icon: SiGrafana, color: '#F46800' },
    { name: 'Splunk', description: 'Log Analytics', icon: SiSplunk, color: '#000000' },
    { name: 'Vault', description: 'Secrets Management', icon: SiVault, color: '#000000' },
    { name: 'Loki', description: 'Log Aggregation', icon: SiGrafana, color: '#F46800' },
  ],
  'Languages & Scripting': [
    { name: 'Python', description: 'Automation & Scripting', icon: SiPython, color: '#3776AB' },
    { name: 'Go', description: 'Systems Programming', icon: SiGo, color: '#00ADD8' },
    { name: 'Bash/Shell', description: 'Shell Scripting', icon: SiGnubash, color: '#4EAA25' },
    { name: 'Perl', description: 'Legacy Automation', icon: SiPerl, color: '#39457E' },
    { name: 'Groovy', description: 'Jenkins Pipelines', icon: FileCode, color: '#4298B8' },
  ],
  'Databases & Tools': [
    { name: 'PostgreSQL', description: 'Relational Database', icon: SiPostgresql, color: '#336791' },
    { name: 'Jira', description: 'Project Management', icon: SiJira, color: '#0052CC' },
    { name: 'GitHub', description: 'Version Control', icon: SiGithub, color: '#181717' },
    { name: 'Perforce', description: 'Version Control', icon: SiPerforce, color: '#404040' },
  ],
};

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Cloud & Infrastructure');

  return (
    <section id="tech-stack" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dots opacity-15" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4 border border-primary/20">
            Technologie
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Nowoczesne narzędzia i sprawdzone technologie dla maksymalnej efektywności.
          </p>
        </div>

        {/* Category tabs with modern styling */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(techStack).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/40 scale-105'
                  : 'glass border border-primary/20 text-muted hover:border-primary/50 hover:text-foreground hover:bg-primary/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech grid with enhanced cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack[activeCategory as keyof typeof techStack].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative glass-card rounded-2xl p-6 text-center card-hover cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                  style={{ backgroundColor: `${tech.color}20` }}
                />

                <div className="relative z-10">
                  {/* Icon with color glow */}
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div
                      className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ backgroundColor: tech.color }}
                    />
                    <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={48} style={{ color: tech.color }} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-muted group-hover:text-muted/80 transition-colors">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass inline-block rounded-2xl p-8 border border-primary/20">
            <p className="text-muted mb-4">
              Potrzebujesz czegoś innego? Stack dobieramy pod projekt.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-primary hover:text-white font-semibold transition-all duration-300 hover:bg-primary px-6 py-3 rounded-xl"
            >
              <span>Zapytaj o dedykowane rozwiązanie</span>
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
