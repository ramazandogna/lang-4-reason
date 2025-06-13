import { cn } from '@/lib/cn';
import {
  BUTTON_SIZE,
  BUTTON_COLOR,
  BUTTON_ICON_SIZE
} from './Button.constants';
import { ButtonProps } from './Button.types';

export default function Button({
  size = 'md',
  color = 'gray',
  variant = 'primary',
  state = 'default',
  leftIcon,
  rightIcon,
  children,
  iconOnly = false,
  className = '',
  align = 'center', // 'left' | 'center' | 'right'
  ...props
}: ButtonProps & { align?: 'left' | 'center' | 'right' }) {
  const disabled = state === 'disabled' || props.disabled;

  // Icon button ise özel classları uygula
  const isIconOnly = iconOnly || (!children && (leftIcon || rightIcon));

  // Justify değerini tailwind'e çevir
  const justify =
    align === 'left'
      ? 'justify-start'
      : align === 'right'
        ? 'justify-end'
        : 'justify-center';

  return (
    <button
      type="button"
      className={cn(
        'inline-flex cursor-pointer items-center font-semibold', // button always flex
        isIconOnly ? BUTTON_ICON_SIZE[size] : BUTTON_SIZE[size],
        BUTTON_COLOR[color][variant],
        disabled && 'pointer-events-none cursor-not-allowed opacity-60',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {/* İÇERİK WRAPPER - gap-2 ile sabit boşluk, justify ile hizalama */}
      <span className={cn('flex w-full items-center', justify, 'gap-2')}>
        {/* Sol ikon varsa */}
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        {/* Sadece ikon değilse children'ı göster */}
        {!isIconOnly && <span>{children}</span>}
        {/* Sağ ikon varsa */}
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </span>
    </button>
  );
}
