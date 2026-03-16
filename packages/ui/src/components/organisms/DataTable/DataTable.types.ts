import type { ReactNode } from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export interface Column<T = Record<string, unknown>> {
  key: keyof T | string;
  header: string;
  width?: string | number;
  sortable?: boolean;
  render?: (value: unknown, row: T, index: number) => ReactNode;
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  rowKey: keyof T | ((row: T) => string);
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
  sortColumn?: string;
  sortDirection?: SortDirection;
  onSort?: (column: string, direction: SortDirection) => void;
  stickyHeader?: boolean;
  className?: string;
}
