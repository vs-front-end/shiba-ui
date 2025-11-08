export interface IPagination {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
  maxVisiblePages?: number;
  selectPageText?: string;
}
