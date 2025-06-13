export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalResults: number;
  onPageChange?: (page: number) => void;

  /** 'start' | 'center' */
  align?: 'start' | 'center';
  /** Önceki/Sonraki yazısını göster; false ise sadece ikon görünür */
  showPrevNextText?: boolean;
  /** Sayfa numaralarını göster; false ise sayılar + "..." gizlenir */
  showPages?: boolean;
  /** “Showing…” metnini göster */
  showResults?: boolean;

  className?: string;
}

export type PageItem = number | 'ellipsis';
