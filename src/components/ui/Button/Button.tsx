import { cn } from '@/lib/utils/cn'; // Varsa yoksa className birleştirici. Yoksa string ile birleştir.
import { BUTTON_SIZE, BUTTON_COLOR } from './Button-constants';
import { ButtonProps } from './Button-types';

export default function Button({
  size = 'md',
  color = 'gray',
  variant = 'primary',
  state = 'default',
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const disabled = state === 'disabled' || props.disabled;

  return (
    <button
      type="button"
      className={cn(
        'inline-flex cursor-pointer items-center font-semibold transition-all duration-150 outline-none select-none',
        BUTTON_SIZE[size],
        BUTTON_COLOR[color][variant],
        disabled && 'pointer-events-none cursor-not-allowed opacity-60',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
}
