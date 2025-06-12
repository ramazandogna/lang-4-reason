import type { InputVariant } from './Input.types';

export const INPUT_BASE =
  'flex w-full h-12 items-center rounded-full bg-white px-4 gap-2';

export const INPUT_VARIANTS: Record<InputVariant, string> = {
  default:
    'border border-gray-30 focus-within:border-[var(--accent)] focus-within:ring-1 focus-within:ring-[var(--accent)]',
  error:
    'border border-destructive-50 focus-within:border-destructive-50 focus-within:ring-1 focus-within:ring-destructive-50',
  success:
    'border border-green-500 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500'
};

export const INPUT_HELPER: Record<InputVariant, string> = {
  default: 'text-gray-500',
  error: 'text-destructive-50',
  success: 'text-green-500'
};
