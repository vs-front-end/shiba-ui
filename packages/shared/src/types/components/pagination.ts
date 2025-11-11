export interface IPagination {
  /** Total number of items */
  totalItems: number;
  /** Number of items per page */
  itemsPerPage: number;
  /** Current active page */
  currentPage: number;
  /** Callback when page changes */
  onPageChange?: (page: number) => void;
  /** Maximum number of visible page buttons */
  maxVisiblePages?: number;
  /** Text for page selector */
  selectPageText?: string;
}
