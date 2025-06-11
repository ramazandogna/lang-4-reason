import { ReactNode } from 'react';

export type BadgeColor =
  | 'gray'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'theme';

export type BadgeVariant = 'solid' | 'outline' | 'soft' | 'ghost';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeShape = 'pill' | 'circle'; // pill: klasik, circle: icon/counter

export interface BadgeProps {
  color?: BadgeColor;
  variant?: BadgeVariant;
  size?: BadgeSize;
  shape?: BadgeShape;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}
