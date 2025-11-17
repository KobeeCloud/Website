'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');

  return (
    <Link
      href={isEnglish ? '/' : '/en'}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
      aria-label={isEnglish ? 'Switch to Polish' : 'Switch to English'}
    >
      <Globe size={18} />
      <span className="font-semibold">{isEnglish ? 'PL' : 'EN'}</span>
    </Link>
  );
}
