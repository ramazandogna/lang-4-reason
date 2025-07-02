// Next.js core
import NextLink from 'next/link';

// Utils
import { cn } from '@/utils/cn';

// Types & Constants
import type { LinkProps } from './Link.types';
import { LINK_VARIANTS } from './Link.constants';

// Styles
import './Link.css';

export default function Link({
  href,
  variant = 'default',
  newTab = false,
  children,
  className = '',
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        LINK_VARIANTS[variant],
        className,
        'text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]'
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
