// src/components/ui/Pagination/Pagination.tsx
'use client';

import { cn } from '@/lib/utils/cn';
import { PAGINATION_LABELS } from './Pagination.constants';
import type { PaginationProps, PageItem } from './Pagination.types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  totalResults,
  className = ''
}: PaginationProps) {
  const pages: PageItem[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i <= 4 || i === currentPage || i > totalPages - 2) {
      pages.push(i);
    } else if (i === 5 && currentPage > 5 && !pages.includes('ellipsis')) {
      pages.push('ellipsis');
    }
  }

  const endItem = Math.min(currentPage * pageSize, totalResults);

  return (
    <div className={cn('flex items-center gap-4 text-gray-600', className)}>
      {/* Önceki */}
      <Button
        size="sm"
        variant="ghost"
        color="gray"
        leftIcon={<ChevronLeft size={16} />}
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="text-sm font-semibold transition-all duration-300 hover:text-[rgba(89,66,249,0.50)]! disabled:opacity-50"
      >
        {PAGINATION_LABELS.prev}
      </Button>

      {/* Sayfa numaraları */}
      {pages.map((p, idx) =>
        p === 'ellipsis' ? (
          <span key={`e-${idx}`} className="text-md px-2">
            …
          </span>
        ) : (
          <Button
            key={p}
            size="md"
            variant="ghost"
            color="gray"
            onClick={() => onPageChange?.(p as number)}
            className={cn(
              'h-8! w-8! p-0 transition-all duration-300',
              p === currentPage
                ? 'bg-[rgba(89,66,249,0.08)]! font-semibold text-[#5942f9] hover:bg-[rgba(89,66,249,0.20)]!'
                : 'hover:bg-gray-300 hover:text-white'
            )}
          >
            {p}
          </Button>
        )
      )}

      {/* Sonraki */}
      <Button
        size="sm"
        variant="ghost"
        color="gray"
        rightIcon={<ChevronRight size={16} />}
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="text-sm font-semibold transition-all duration-300 hover:text-[rgba(89,66,249,0.50)]! disabled:opacity-50"
      >
        {PAGINATION_LABELS.next}
      </Button>

      {/* Showing metni */}
      <span className="group ml-auto text-sm font-semibold">
        Showing{' '}
        <span className="group-hover:text-[rgba(89,66,249,0.80)]! group-hover:transition-all group-hover:duration-300">
          {' '}
          {endItem}{' '}
        </span>{' '}
        of{' '}
        <span className="group-hover:text-[rgba(89,66,249,0.50)]! group-hover:transition-all group-hover:duration-300">
          {totalResults.toLocaleString()}{' '}
        </span>
        results
      </span>
    </div>
  );
}
