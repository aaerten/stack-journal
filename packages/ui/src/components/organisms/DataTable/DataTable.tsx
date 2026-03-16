import React from 'react';
import type { DataTableProps, SortDirection, Column } from './DataTable.types';

function getRowKey<T>(
  row: T,
  rowKey: DataTableProps<T>['rowKey'],
  index: number
): string {
  if (typeof rowKey === 'function') return rowKey(row);
  return String((row as Record<string, unknown>)[rowKey as string] ?? index);
}

function getCellValue<T>(row: T, key: string): unknown {
  return (row as Record<string, unknown>)[key];
}

function SortIcon({
  column,
  sortColumn,
  sortDirection,
}: {
  column: string;
  sortColumn?: string;
  sortDirection?: SortDirection;
}) {
  if (column !== sortColumn) {
    return (
      <span className="sj-dt__sort-icon sj-dt__sort-icon--idle" aria-hidden="true">
        ⇅
      </span>
    );
  }
  return (
    <span className="sj-dt__sort-icon sj-dt__sort-icon--active" aria-hidden="true">
      {sortDirection === 'asc' ? '↑' : '↓'}
    </span>
  );
}

export function DataTable<T = Record<string, unknown>>({
  columns,
  data,
  rowKey,
  loading = false,
  emptyMessage = 'No data available.',
  onRowClick,
  sortColumn,
  sortDirection,
  onSort,
  stickyHeader = false,
  className = '',
}: DataTableProps<T>) {
  const handleSort = (col: Column<T>) => {
    if (!col.sortable || !onSort) return;
    const key = String(col.key);
    if (sortColumn !== key) return onSort(key, 'asc');
    if (sortDirection === 'asc') return onSort(key, 'desc');
    return onSort(key, null);
  };

  return (
    <div
      className={`sj-dt__wrapper ${className}`}
      role="region"
      aria-label="Data table"
      aria-busy={loading}
    >
      <table className={`sj-dt${stickyHeader ? ' sj-dt--sticky' : ''}`}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                className={`sj-dt__th${col.sortable ? ' sj-dt__th--sortable' : ''}`}
                style={{ width: col.width, textAlign: col.align ?? 'left' }}
                onClick={() => handleSort(col)}
                aria-sort={
                  sortColumn === String(col.key)
                    ? sortDirection === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : undefined
                }
              >
                {col.header}
                {col.sortable && (
                  <SortIcon
                    column={String(col.key)}
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="sj-dt__state">
                <span className="sj-dt__spinner" aria-label="Loading" role="status" />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="sj-dt__state sj-dt__state--empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={getRowKey(row, rowKey, index)}
                className={`sj-dt__row${onRowClick ? ' sj-dt__row--clickable' : ''}`}
                onClick={() => onRowClick?.(row)}
                tabIndex={onRowClick ? 0 : undefined}
                onKeyDown={(e) => e.key === 'Enter' && onRowClick?.(row)}
              >
                {columns.map((col) => {
                  const value = getCellValue(row, String(col.key));
                  return (
                    <td
                      key={String(col.key)}
                      className="sj-dt__td"
                      style={{ textAlign: col.align ?? 'left' }}
                    >
                      {col.render
                        ? col.render(value, row, index)
                        : String(value ?? '')}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

DataTable.displayName = 'DataTable';