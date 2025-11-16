import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  title: string;
  icon: ReactNode;
  bullets: string[];
  className?: string;
}

export function OfferCard({ title, icon, bullets, className }: OfferCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10',
        className
      )}
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

      <div className="relative z-10">
        
        <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        
        <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>

        
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start text-muted text-sm">
              <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
