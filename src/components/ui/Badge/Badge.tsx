import { BADGE_COLOR, BADGE_SIZE, BADGE_SHAPE } from './Badge.constants';
import { BadgeProps } from './Badge.types';
import { cn } from '@/utils/cn'; // Kendi util'in

export default function Badge({
  color = 'gray',
  variant = 'solid',
  size = 'md',
  shape = 'pill',
  leftIcon,
  rightIcon,
  children,
  className = ''
}: BadgeProps) {
  const base =
    shape === 'circle'
      ? `${BADGE_SHAPE.circle} ${BADGE_SIZE[size]}`
      : `${BADGE_SHAPE.pill} ${BADGE_SIZE[size]}`;

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium whitespace-nowrap transition-all',
        base,
        BADGE_COLOR[color][variant],
        className
      )}
    >
      {leftIcon && <span className="mr-1 flex items-center">{leftIcon}</span>}
      {children && shape !== 'circle' && <span>{children}</span>}
      {rightIcon && <span className="ml-1 flex items-center">{rightIcon}</span>}
      {/* Eğer badge tamamen icon/counter ise: */}
      {!children && shape === 'circle' && leftIcon}
    </span>
  );
}
