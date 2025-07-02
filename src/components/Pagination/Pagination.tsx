// React & Next core imports
'use client';

// UI Components
import { Button } from '@/components/Button';

// Icons
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Utils
import { cn } from '@/utils/cn';

// Context
import { useResponsive } from '@/context/ResponsiveContext';

// Constants & Types
import { PAGINATION_LABELS, PAGINATION_DEFAULTS } from './Pagination.constants';
import type { PaginationProps, PageItem } from './Pagination.types';

export default function Pagination({
  currentPage,
  totalPages,
  pageSize,
  totalResults,
  onPageChange,

  /** Desktop only configuration */
  align = PAGINATION_DEFAULTS.align,
  showPrevNextText = PAGINATION_DEFAULTS.showPrevNextText,
  showPages = PAGINATION_DEFAULTS.showPages,
  showResults = PAGINATION_DEFAULTS.showResults,

  className = ''
}: PaginationProps) {
  // Hooks
  const { width, isClient } = useResponsive();

  // SSR protection - basit fallback render et
  if (!isClient) {
    return (
      <div
        className={cn(
          'flex w-full items-center gap-4 text-gray-600',
          'group',
          align === 'start' ? 'justify-start' : 'justify-center',
          className
        )}
      >
        <Button
          size="sm"
          variant="primary"
          color="theme"
          leftIcon={<ChevronLeft size={16} />}
          disabled={true}
          className="text-sm font-semibold transition-all duration-300 disabled:opacity-50"
        >
          {showPrevNextText ? PAGINATION_LABELS.prev : null}
        </Button>
        <span className="text-md font-semibold">
          Sayfa {currentPage} of {totalPages}
        </span>
        <Button
          size="sm"
          variant="primary"
          color="theme"
          rightIcon={<ChevronRight size={16} />}
          disabled={true}
          className="text-sm font-semibold transition-all duration-300 disabled:opacity-50"
        >
          {showPrevNextText ? PAGINATION_LABELS.next : null}
        </Button>
      </div>
    );
  }

  // Mobile Layout - Simplified pagination for small screens
  if (width < 640) {
    return (
      <div className="flex w-full items-center justify-center gap-4 py-2">
        {/* Previous Button */}
        <Button
          size="sm"
          variant="primary"
          color="theme"
          leftIcon={<ChevronLeft size={20} />}
          onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          iconOnly
          className="text-sm font-semibold transition-all duration-300 hover:text-[var(--accent)] disabled:opacity-50"
        />

        {/* Page Indicator */}
        <span className="text-md group font-semibold">
          Sayfa{' '}
          <span className="transition-all duration-300 group-hover:text-[var(--accent)]!">
            {currentPage}{' '}
          </span>
          of{' '}
          <span className="transition-all duration-300 group-hover:text-[var(--accent)]!">
            {totalPages}
          </span>
        </span>

        {/* Next Button */}
        <Button
          size="sm"
          variant="primary"
          color="theme"
          rightIcon={<ChevronRight size={20} />}
          onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          iconOnly
          className="text-sm font-semibold transition-all duration-300 hover:text-[var(--accent)] disabled:opacity-50"
        />
      </div>
    );
  }

  // Desktop Layout - Full pagination with page numbers

  // Create page array with ellipsis logic
  const pages: PageItem[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i <= 4 || i === currentPage || i > totalPages - 2) {
      pages.push(i);
    } else if (i === 5 && currentPage > 5 && !pages.includes('ellipsis')) {
      pages.push('ellipsis');
    }
  }

  // Calculate display values
  const endItem = Math.min(currentPage * pageSize, totalResults);
  const justifyClass = align === 'start' ? 'justify-start' : 'justify-center';

  return (
    <div
      className={cn(
        'flex w-full items-center gap-4 text-gray-600',
        'group', // for group-hover effects
        justifyClass,
        className
      )}
    >
      {/* Previous Button */}
      <Button
        size="sm"
        variant="primary"
        color="theme"
        leftIcon={<ChevronLeft size={16} />}
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="text-sm font-semibold transition-all duration-300 hover:text-[var(--accent)] disabled:opacity-50"
      >
        {showPrevNextText ? PAGINATION_LABELS.prev : null}
      </Button>

      {/* Page Numbers */}
      {showPages &&
        pages.map((p, idx) =>
          p === 'ellipsis' ? (
            <span
              key={`e-${idx}`}
              className="text-md px-2 transition-all duration-300"
            >
              …
            </span>
          ) : (
            <Button
              key={p}
              size="md"
              variant="ghost"
              color="theme"
              onClick={() => onPageChange?.(p as number)}
              className={cn(
                'h-8! w-8! p-0 transition-all duration-300',
                p === currentPage
                  ? 'bg-[var(--text)]! font-semibold hover:bg-[var(--secondary-bg)]!'
                  : 'text-[var(--accent)]! hover:bg-[var(--text)]! hover:text-[var(--background)]!'
              )}
            >
              {p}
            </Button>
          )
        )}

      {/* Next Button */}
      <Button
        size="sm"
        variant="primary"
        color="theme"
        rightIcon={<ChevronRight size={16} />}
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="text-sm font-semibold transition-all duration-300 hover:text-[var(--accent)]! disabled:opacity-50"
      >
        {showPrevNextText ? PAGINATION_LABELS.next : null}
      </Button>

      {/* Results Summary */}
      {showResults && (
        <span
          className={cn(
            'text-sm font-semibold text-[var(--text)]/50 transition-all duration-300',
            align === 'start' && 'ml-auto'
          )}
        >
          <span className="transition-all duration-300 group-hover:text-[var(--accent)]!">
            {totalResults}
          </span>{' '}
          sonuçtan{' '}
          <span className="transition-all duration-300 group-hover:text-[var(--accent)]!">
            {endItem}
          </span>{' '}
          tanesi
        </span>
      )}
    </div>
  );
}
