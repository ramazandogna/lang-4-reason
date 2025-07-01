import NextLink from 'next/link';
import { cn } from '@/utils/cn';
import type { LinkProps } from './Link.types';
import { LINK_VARIANTS } from './Link.constants';
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
