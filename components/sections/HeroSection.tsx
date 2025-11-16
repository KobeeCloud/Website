import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />


      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">DevOps • Infrastructure • Automation</span>
        </div>


        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
          <span className="gradient-text">KobeCloud</span>
          <br />
          DevOps Engineer
          <br />
          Gdynia / Trójmiasto / Zdalnie
        </h1>


        <p className="text-xl text-muted max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
          Automatyzacja infrastruktury, CI/CD, monitoring. Strony WWW dla małych firm - tworzenie, wdrożenie, maintenance.
          Kontrakty, projekty, wsparcie zespołów.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Link
            href="#kontakt"
            className="group px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all hover:shadow-xl hover:shadow-primary/50 flex items-center space-x-2"
          >
            <span>Skontaktuj się</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#oferta"
            className="px-8 py-4 bg-secondary border border-border hover:border-primary/50 text-foreground rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Zobacz ofertę
          </Link>
        </div>


        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fade-in-up animation-delay-600">
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-sm text-muted">Uptime SLA</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">&lt;30min</div>
            <div className="text-sm text-muted">Deploy time</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted">Monitoring</div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
