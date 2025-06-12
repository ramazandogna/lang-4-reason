import { Button } from '../ui/Button';
import { NavbarProps } from './Navbar.types';
import { cn } from '@/lib/utils/cn';

export default function Navbar({
  items,
  activeKey,
  onChange,
  className = ''
}: NavbarProps) {
  return (
    <nav
      className={cn(
        'flex items-center gap-4 border-b border-gray-200 bg-transparent',
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
                ? 'text-gray-900'
                : 'group text-gray-500 hover:text-gray-900'
            )}
          >
            <span>{item.label}</span>
            {/* Sadece seçili tabda badge görünür */}
            {isActive && item.count !== undefined && (
              <span className="ml-2 rounded-full bg-[rgba(89,66,249,0.08)] px-3 py-0.5 text-base font-bold text-[#5942f9]">
                {item.count}
              </span>
            )}
            {/* Alttaki çizgi */}
            <span
              className={cn(
                'absolute -bottom-[5px] left-0 h-[2px] w-full rounded-full transition-all duration-200',
                isActive
                  ? 'h-[3px] bg-[#5942f9]'
                  : 'bg-gray-200 group-hover:bg-gray-900'
              )}
            />
          </Button>
        );
      })}
    </nav>
  );
}
