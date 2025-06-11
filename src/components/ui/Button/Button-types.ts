import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'gray' | 'primary' | 'danger' | 'theme';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonState = 'default' | 'disabled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  state?: ButtonState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}
