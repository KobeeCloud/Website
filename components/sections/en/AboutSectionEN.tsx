import { Award, Clock, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: <Award size={32} />,
    title: 'Commercial Projects',
    description: '~2 years experience in Azure infrastructure automation, Terraform, Ansible, CI/CD (Jenkins, Azure DevOps).',
  },
  {
    icon: <Shield size={32} />,
    title: 'Self-taught Expertise',
    description: 'Kubernetes, GitOps (ArgoCD/Flux), monitoring (Prometheus/Grafana) - learned independently through practice and personal projects.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Pragmatic Approach',
    description: 'Combining commercial experience with self-acquired knowledge. Deployments based on best practices.',
  },
  {
    icon: <Users size={32} />,
    title: 'Continuous Learning',
    description: 'DevOps enthusiast - constantly experimenting with new tools, reading documentation, building proof-of-concepts.',
  },
];

const stats = [
  { value: 'Azure', label: 'Main Specialization' },
  { value: 'CI/CD', label: 'Jenkins, Azure DevOps' },
  { value: 'IaC', label: 'Terraform & Ansible' },
  { value: 'GitOps', label: 'ArgoCD & Flux' },
];

export function AboutSectionEN() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-text">KobeCloud</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-2">
            DevOps Engineer from Tri-City - infrastructure automation, Kubernetes, CI/CD, monitoring.
          </p>
          <p className="text-lg text-muted/80">
            <span className="font-semibold text-foreground">Jakub Pospieszny</span> - ~2 years commercially + passionate self-learner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Experience</h3>
              <div className="space-y-4 text-muted">
                <p>
                  <strong className="text-foreground">Commercial (~2 years):</strong>
                  <br />• Infrastructure automation in Azure (Terraform, Ansible)
                  <br />• Build & Deployment automation (Perl, Jenkins, Vault)
                  <br />• CI/CD pipelines (Azure DevOps, GitHub Actions)
                  <br />• Working with teams on production system stability
                </p>
                <p>
                  <strong className="text-foreground">Self-learning and projects:</strong>
                  <br />• Kubernetes - from basics to advanced deployments
                  <br />• GitOps (ArgoCD, Flux) - declarative management
                  <br />• Monitoring stack (Prometheus, Grafana, Loki)
                  <br />• Websites (Next.js, React, TypeScript) - development and deployment
                </p>
                <p>
                  <strong className="text-foreground">Location:</strong> Luzino, serving the entire Tri-City area and remote.
                  For small businesses, I also offer website development, deployment, and maintenance.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Key Competencies:</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Microsoft Azure (main specialization) + AWS & GCP</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Infrastructure as Code (Terraform, Ansible)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Cloud Platforms (Azure <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-1">Preferred</span>, AWS, GCP)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Kubernetes & GitOps (ArgoCD, Flux)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>CI/CD (Jenkins, Azure DevOps, GitHub Actions, CircleCI)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Monitoring (Prometheus, Grafana, Splunk, Loki)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Security & Secrets (HashiCorp Vault, best practices)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Scripting (Bash <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-1">Preferred</span>, Python, Go, Perl, Groovy)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  <span>Databases (PostgreSQL, PL/pgSQL)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-secondary/50 border border-border rounded-xl"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted mb-6">
            Want to learn more or discuss your project?
          </p>
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
