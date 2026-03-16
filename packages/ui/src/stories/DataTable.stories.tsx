import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DataTable } from '../components/organisms/DataTable';
import type { Column, SortDirection } from '../components/organisms/DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

interface User {
  id: number;
  name: string;
  role: string;
  status: 'active' | 'inactive';
  joined: string;
}

const columns: Column<User>[] = [
  { key: 'id', header: 'ID', width: 60, align: 'center' },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
  {
    key: 'status',
    header: 'Status',
    align: 'center',
    render: (value) => (
      <span style={{
        padding: '2px 10px',
        borderRadius: 99,
        fontSize: 11,
        background: value === 'active' ? '#0d2218' : '#14141f',
        color: value === 'active' ? '#4ade80' : '#55536a',
        border: `1px solid ${value === 'active' ? 'rgba(74,222,128,0.2)' : '#1c1c2e'}`,
      }}>
        {String(value)}
      </span>
    ),
  },
  { key: 'joined', header: 'Joined', sortable: true },
];

const data: User[] = [
  { id: 1, name: 'Alp Erten', role: 'Full Stack Dev', status: 'active', joined: '2024-01' },
  { id: 2, name: 'Jane Smith', role: 'Frontend Dev', status: 'active', joined: '2024-03' },
  { id: 3, name: 'Bob Johnson', role: 'Backend Dev', status: 'inactive', joined: '2023-11' },
  { id: 4, name: 'Alice Lee', role: 'Designer', status: 'active', joined: '2024-05' },
  { id: 5, name: 'Charlie Brown', role: 'DevOps', status: 'inactive', joined: '2023-08' },
];

export const Default: Story = {
  args: {
    columns,
    data,
    rowKey: 'id',
  },
};

export const WithSorting: Story = {
  render: () => {
    const [sortColumn, setSortColumn] = useState<string | undefined>();
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);

    const handleSort = (col: string, dir: SortDirection) => {
      setSortColumn(col);
      setSortDirection(dir);
    };

    const sorted = [...data].sort((a, b) => {
      if (!sortColumn || !sortDirection) return 0;
      const aVal = String(a[sortColumn as keyof User]);
      const bVal = String(b[sortColumn as keyof User]);
      return sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    });

    return (
      <DataTable
        columns={columns}
        data={sorted}
        rowKey="id"
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={handleSort}
      />
    );
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    rowKey: 'id',
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    rowKey: 'id',
    emptyMessage: 'No users found.',
  },
};

export const Clickable: Story = {
  args: {
    columns,
    data,
    rowKey: 'id',
    onRowClick: (row) => alert(`Clicked: ${(row as User).name}`),
  },
};
