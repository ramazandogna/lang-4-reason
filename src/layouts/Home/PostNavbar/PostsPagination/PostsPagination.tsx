'use client';

// UI Components
import { Pagination } from '@/components/Pagination';

type Props = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalResults: number;
  onPageChange: (page: number) => void;
};

export default function PostsPagination({
  currentPage,
  totalPages,
  pageSize,
  totalResults,
  onPageChange
}: Props) {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      pageSize={pageSize}
      totalResults={totalResults}
      onPageChange={onPageChange}
      align="center"
      showPrevNextText
      showPages
      showResults
      className="p-4"
    />
  );
}
