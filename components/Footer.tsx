import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Infrastruktura jako kod', href: '#oferta' },
    { name: 'Kubernetes & GitOps', href: '#oferta' },
    { name: 'CI/CD Automation', href: '#oferta' },
    { name: 'Monitoring', href: '#oferta' },
  ],
  company: [
    { name: 'O mnie', href: '#o-firmie' },
    { name: 'Jak pracuję', href: '#proces' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#kontakt' },
  ],
  legal: [
    { name: 'Polityka prywatności', href: '/privacy' },
    { name: 'RODO', href: '/privacy#rodo' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <div className="col-span-1">
            <div className="text-2xl font-bold gradient-text mb-4">KobeCloud</div>
            <p className="text-muted text-sm mb-4">
              DevOps Engineer - automatyzacja, infrastruktura, CI/CD dla Twojej firmy.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Kobeep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jakub-pospieszny-085a632a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kontakt@kobecloud.pl"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-foreground font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-foreground font-semibold mb-4">Informacje</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-center md:text-left">
              <p className="text-muted text-sm">
                © {currentYear} KobeCloud Jakub Pospieszny. Wszystkie prawa zastrzeżone.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted text-xs">
                <strong className="text-foreground">KobeCloud Jakub Pospieszny</strong>
                <br />
                NIP: 5882530612 | REGON: 541797979
              </p>
            </div>
          </div>
          <p className="text-center text-muted/70 text-xs">
            Indywidualna działalność gospodarcza | Mickiewicza 19, 84-242 Luzino
          </p>
        </div>
      </div>
    </footer>
  );
}
