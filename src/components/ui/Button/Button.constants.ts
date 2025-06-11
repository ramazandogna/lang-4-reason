import { ButtonSize, ButtonColor, ButtonVariant } from './Button.types';

// Tailwind classlarını sabitlerde tanımla
export const BUTTON_SIZE: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-[16px] gap-2 h-8',
  md: 'px-4 py-[10px] text-base rounded-[20px] gap-2 h-10',
  lg: 'px-6 py-3 text-lg rounded-[24px] gap-3 h-12',
  xl: 'px-8 py-4 text-xl rounded-[28px] gap-3 h-14'
};

export const BUTTON_ICON_SIZE: Record<ButtonSize, string> = {
  sm: 'w-8 h-8 rounded-full p-0 justify-center',
  md: 'w-10 h-10 rounded-full p-0 justify-center',
  lg: 'w-12 h-12 rounded-full p-0 justify-center',
  xl: 'w-14 h-14 rounded-full p-0 justify-center'
};

export const BUTTON_COLOR: Record<
  ButtonColor,
  Record<ButtonVariant, string>
> = {
  gray: {
    primary: 'bg-gray-800 text-white hover:bg-gray-900',
    secondary:
      'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-800 hover:bg-gray-100'
  },
  primary: {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary:
      'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50',
    ghost: 'bg-transparent text-indigo-600 hover:bg-indigo-50'
  },
  danger: {
    primary: 'bg-rose-500 text-white hover:bg-rose-600',
    secondary: 'bg-white text-rose-500 border border-rose-200 hover:bg-rose-50',
    ghost: 'bg-transparent text-rose-500 hover:bg-rose-50'
  },
  theme: {
    primary:
      'bg-[var(--text)] text-[var(--background)] hover:bg-[var(--secondary-bg)]',
    secondary:
      'bg-[var(--secondary-bg)] text-[var(--background)] border border-[var(--accent)] hover:bg-[var(--background)]',
    ghost: 'bg-transparent text-[var(--background)] hover:bg-[var(--accent-bg)]'
  }
};
