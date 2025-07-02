import { BadgeColor, BadgeVariant, BadgeSize, BadgeShape } from './Badge.types';

// Size (yükseklik, font, padding)
export const BADGE_SIZE: Record<BadgeSize, string> = {
  sm: 'text-xs h-6 px-2 gap-1',
  md: 'text-sm h-8 px-3 gap-2',
  lg: 'text-base h-10 px-4 gap-2'
};

// Shape (pill veya daire)
export const BADGE_SHAPE: Record<BadgeShape, string> = {
  pill: 'rounded-full',
  circle: 'rounded-full aspect-square justify-center px-0 w-8 h-8 flex p-0'
};

// Renkler ve varyantlar (Tailwind class)
export const BADGE_COLOR: Record<BadgeColor, Record<BadgeVariant, string>> = {
  gray: {
    solid: 'bg-gray-800 text-white',
    outline: 'bg-transparent text-gray-800 border border-gray-300',
    soft: 'bg-gray-100 text-gray-800',
    ghost: 'bg-transparent text-gray-500'
  },
  primary: {
    solid: 'bg-indigo-600 text-white',
    outline: 'bg-transparent text-indigo-600 border border-indigo-300',
    soft: 'bg-indigo-100 text-indigo-700',
    ghost: 'bg-transparent text-indigo-500'
  },
  danger: {
    solid: 'bg-rose-500 text-white',
    outline: 'bg-transparent text-rose-500 border border-rose-200',
    soft: 'bg-rose-100 text-rose-700',
    ghost: 'bg-transparent text-rose-500'
  },
  warning: {
    solid: 'bg-amber-400 text-white',
    outline: 'bg-transparent text-amber-500 border border-amber-300',
    soft: 'bg-amber-100 text-amber-700',
    ghost: 'bg-transparent text-amber-500'
  },
  success: {
    solid: 'bg-green-500 text-white',
    outline: 'bg-transparent text-green-500 border border-green-300',
    soft: 'bg-green-100 text-green-700',
    ghost: 'bg-transparent text-green-500'
  },
  info: {
    solid: 'bg-cyan-500 text-white',
    outline: 'bg-transparent text-cyan-600 border border-cyan-300',
    soft: 'bg-cyan-100 text-cyan-700',
    ghost: 'bg-transparent text-cyan-500'
  },
  theme: {
    solid: 'bg-[var(--accent)] text-[var(--background)]',
    outline:
      'bg-transparent text-[var(--accent)] border border-[var(--accent)]',
    soft: 'bg-[var(--accent)]/10 text-[var(--accent)]',
    ghost: 'bg-transparent text-[var(--accent)]'
  }
};
