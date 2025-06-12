'use client';

import { cn } from '@/lib/utils/cn';
import { INPUT_BASE, INPUT_VARIANTS, INPUT_HELPER } from './Input.constants';
import type { InputProps } from './Input.types';

export default function Input({
  label,
  helperText,
  variant = 'default',
  leftIcon,
  rightIcon,
  action,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <label className="text-sm font-semibold text-gray-900">{label}</label>
      )}
      <div
        className={cn(
          INPUT_BASE,
          INPUT_VARIANTS[variant],
          'transition-colors duration-150'
        )}
      >
        {leftIcon && (
          <span className="flex-none text-gray-500">{leftIcon}</span>
        )}
        <input
          className="flex-1 bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400"
          {...props}
        />
        {rightIcon && (
          <span className="flex-none text-gray-400">{rightIcon}</span>
        )}
        {action && <span className="flex-none">{action}</span>}
      </div>
      {helperText && (
        <p className={cn('text-sm', INPUT_HELPER[variant])}>{helperText}</p>
      )}
    </div>
  );
}
