// src/components/PostsPagination.tsx
'use client';

import { useState } from 'react';
import { Pagination } from '@/components/ui/Pagination';

type PaginationConfig = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalResults: number;
  /** Masaüstü için geçerli olan ayarlar */
  align: 'start' | 'center';
  showPrevNextText: boolean;
  showPages: boolean;
  showResults: boolean;
};

export default function PostsPagination() {
  const [config, setConfig] = useState<PaginationConfig>({
    currentPage: 1,
    totalPages: 10,
    pageSize: 12,
    totalResults: 120,
    align: 'center',
    showPrevNextText: true,
    showPages: true,
    showResults: true
  });

  const handlePageChange = (newPage: number) => {
    setConfig((prev) => ({ ...prev, currentPage: newPage }));
  };

  return (
    <Pagination
      currentPage={config.currentPage}
      totalPages={config.totalPages}
      pageSize={config.pageSize}
      totalResults={config.totalResults}
      onPageChange={handlePageChange}
      align={config.align}
      showPrevNextText={config.showPrevNextText}
      showPages={config.showPages}
      showResults={config.showResults}
      className="p-4"
    />
  );
}
