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
    <section id="tech-stack" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Nowoczesne narzędzia i sprawdzone technologie dla maksymalnej efektywności.
          </p>
        </div>


        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(techStack).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-secondary/50 border border-border text-muted hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack[activeCategory as keyof typeof techStack].map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

                <div className="relative z-10">

                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={48} style={{ color: tech.color }} />
                  </div>


                  <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>


                  <p className="text-xs text-muted">{tech.description}</p>
                </div>
              </div>
            );
          })}
        </div>


        <div className="mt-16 text-center">
          <p className="text-muted mb-4">
            Potrzebujesz czegoś innego? Stack dobieramy pod projekt.
          </p>
          <a
            href="#kontakt"
            className="inline-block text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            Zapytaj o dedykowane rozwiązanie →
          </a>
        </div>
      </div>
    </section>
  );
}
