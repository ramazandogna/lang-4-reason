export interface PaginationProps {
  /** Geçerli sayfa (1-based) */
  currentPage: number;
  /** Toplam sayfa sayısı */
  totalPages: number;
  /** Sayfa değiştiğinde çağrılır */
  onPageChange?: (page: number) => void;
  /** Her sayfada gösterilen öğe sayısı */
  pageSize: number;
  /** Toplam öğe sayısı */
  totalResults: number;
  className?: string;
}

export type PageItem = number | 'ellipsis';
