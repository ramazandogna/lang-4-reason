import type { ReactNode, InputHTMLAttributes } from 'react';

export type InputVariant = 'default' | 'error' | 'success';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Floating label above the input */
  label?: string;
  /** Helper text shown beneath (color changes in error state) */
  helperText?: string;
  /** Default | error | success */
  variant?: InputVariant;
  /** Leading icon (e.g. search, dollar, calendar) */
  leftIcon?: ReactNode;
  /** Trailing icon (e.g. info) */
  rightIcon?: ReactNode;
  /** Optional “action” node on the far right (e.g. copy button or select) */
  action?: ReactNode;
  className?: string;
}
