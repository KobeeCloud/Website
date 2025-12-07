import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  title: string;
  icon: ReactNode;
  bullets: string[];
  className?: string;
  index?: number;
}

export function OfferCard({ title, icon, bullets, className, index = 0 }: OfferCardProps) {
  return (
    <div
      className={cn(
        'group relative glass-card rounded-2xl p-6 transition-all duration-500 card-3d border-gradient',
        'hover:shadow-2xl hover:shadow-primary/20',
        className
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur" />

      <div className="relative z-10">
        {/* Icon with glow */}
        <div className="mb-5 relative inline-block">
          <div className="absolute inset-0 bg-primary/30 rounded-xl blur-xl group-hover:bg-primary/50 transition-all duration-500" />
          <div className="relative p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/20 transition-all duration-300">
            <div className="text-primary group-hover:scale-110 group-hover:text-white transition-all duration-300">
              {icon}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Bullets */}
        <ul className="space-y-3">
          {bullets.map((bullet, bulletIndex) => (
            <li
              key={bulletIndex}
              className="flex items-start text-muted text-sm group-hover:text-muted/90 transition-colors"
              style={{ transitionDelay: `${bulletIndex * 50}ms` }}
            >
              <span className="inline-block w-2 h-2 bg-primary/60 group-hover:bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-125" />
              <span className="group-hover:translate-x-1 transition-transform duration-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
