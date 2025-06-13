import type { InputVariant } from './Input.types';

export const INPUT_BASE =
  'flex w-full h-12 items-center rounded-full bg-white px-4 gap-2';

export const INPUT_VARIANTS: Record<InputVariant, string> = {
  default:
    'border border-[var(--accent)]/40! focus-within:border-[var(--accent)]! focus-within:ring-1 focus-within:ring-[var(--accent)]!',
  error:
    'border border-[var(--error)]! focus-within:border-[var(--error)]! focus-within:ring-1 focus-within:ring-[var(--error)]!',
  success:
    'border border-[var(--success)]! focus-within:border-[var(--success)]! focus-within:ring-1 focus-within:ring-[var(--success)]!'
};

export const INPUT_HELPER: Record<InputVariant, string> = {
  default: 'text-[var(--text-secondary)]!',
  error: 'text-[var(--error)]!',
  success: 'text-[var(--success)]!'
};
