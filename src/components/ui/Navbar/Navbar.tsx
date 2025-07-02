// UI Components
import { Button } from '@/components/ui/Button';

// Types
import type { NavbarProps } from './Navbar.types';

// Utils
import { cn } from '@/utils/cn';

export default function Navbar({
  items,
  activeKey,
  onChange,
  className = ''
}: NavbarProps) {
  return (
    <nav
      className={cn(
        'flex items-center gap-4 border-b border-[var(--text)]/30 bg-transparent',
        className
      )}
    >
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <Button
            key={item.key}
            type="button"
            variant="ghost"
            onClick={() => onChange?.(item.key)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2 font-bold transition-all hover:bg-transparent focus:outline-none',
              isActive
                ? 'text-[var(--primary)]'
                : 'group text-[var(--text)]/50 hover:text-[var(--text)]'
            )}
          >
            <span className="text-[var(--accent)]">{item.label}</span>
            {/* Show badge only on selected tab */}
            {isActive && item.count !== undefined && (
              <span className="ml-2 rounded-full bg-[var(--accent)]/10 px-3 py-0.5 text-base font-bold text-[var(--text)]">
                {item.count}
              </span>
            )}
            {/* Underline */}
            <span
              className={cn(
                'absolute -bottom-[1.5px] left-0 z-[10] h-[1.5px] w-full rounded-full transition-all duration-200',
                isActive
                  ? 'h-[3px] bg-[var(--accent)]'
                  : 'bg-[var(--text)]/10 group-hover:bg-[var(--text)]'
              )}
            />
          </Button>
        );
      })}
    </nav>
  );
}
