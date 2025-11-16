'use client';

import { useState } from 'react';

const techStack = {
  'Cloud & Infrastructure': [
    { name: 'Azure', color: '#0089D6', description: 'Primary Cloud Platform' },
    { name: 'AWS', color: '#FF9900', description: 'Cloud Provider' },
    { name: 'GCP', color: '#4285F4', description: 'Cloud Provider' },
    { name: 'Terraform', color: '#7B42BC', description: 'Infrastructure as Code' },
    { name: 'Ansible', color: '#EE0000', description: 'Configuration Management' },
  ],
  'Container & Orchestration': [
    { name: 'Kubernetes', color: '#326CE5', description: 'Container Orchestration' },
    { name: 'Docker', color: '#2496ED', description: 'Containerization' },
    { name: 'ArgoCD', color: '#EF7B4D', description: 'GitOps CD' },
    { name: 'Flux', color: '#5468FF', description: 'GitOps Operator' },
  ],
  'CI/CD & Automation': [
    { name: 'Jenkins', color: '#D24939', description: 'Automation Server' },
    { name: 'Azure DevOps', color: '#0078D7', description: 'CI/CD Platform' },
    { name: 'GitHub Actions', color: '#2088FF', description: 'CI/CD Workflows' },
    { name: 'CircleCI', color: '#343434', description: 'CI/CD Platform' },
    { name: 'GitLab CI', color: '#FC6D26', description: 'CI/CD Platform' },
  ],
  'Monitoring & Security': [
    { name: 'Prometheus', color: '#E6522C', description: 'Metrics & Alerting' },
    { name: 'Grafana', color: '#F46800', description: 'Visualization' },
    { name: 'Splunk', color: '#000000', description: 'Log Analytics' },
    { name: 'Vault', color: '#000000', description: 'Secrets Management' },
    { name: 'Loki', color: '#F46800', description: 'Log Aggregation' },
  ],
  'Languages & Scripting': [
    { name: 'Python', color: '#3776AB', description: 'Automation & Scripting' },
    { name: 'Go', color: '#00ADD8', description: 'Systems Programming' },
    { name: 'Bash/Shell', color: '#4EAA25', description: 'Shell Scripting' },
    { name: 'Perl', color: '#39457E', description: 'Legacy Automation' },
    { name: 'Groovy', color: '#4298B8', description: 'Jenkins Pipelines' },
  ],
  'Databases & Tools': [
    { name: 'PostgreSQL', color: '#336791', description: 'Relational Database' },
    { name: 'Jira', color: '#0052CC', description: 'Project Management' },
    { name: 'GitHub', color: '#181717', description: 'Version Control' },
    { name: 'Perforce', color: '#404040', description: 'Version Control' },
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
          {techStack[activeCategory as keyof typeof techStack].map((tech) => (
            <div
              key={tech.name}
              className="group relative bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

              <div className="relative z-10">
                
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>

                
                <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>

                
                <p className="text-xs text-muted">{tech.description}</p>
              </div>
            </div>
          ))}
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
