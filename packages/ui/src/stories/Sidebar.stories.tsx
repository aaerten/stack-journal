import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Sidebar } from '../components/organisms/Sidebar';
import type { SidebarItem } from '../components/organisms/Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const sampleItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '⬡', href: '/' },
  { id: 'projects', label: 'Projects', icon: '◈', href: '/projects', badge: 4 },
  {
    id: 'design',
    label: 'Design System',
    icon: '◇',
    children: [
      { id: 'atoms', label: 'Atoms', href: '/design/atoms' },
      { id: 'molecules', label: 'Molecules', href: '/design/molecules' },
      { id: 'organisms', label: 'Organisms', href: '/design/organisms' },
    ],
  },
  { id: 'analytics', label: 'Analytics', icon: '◉', href: '/analytics' },
  { id: 'settings', label: 'Settings', icon: '◎', href: '/settings' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    activeId: 'dashboard',
  },
  decorators: [
    (Story) => (
      <div style={{ height: 500, background: '#0f0f18', borderRadius: 12, overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithCollapse: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div style={{ height: 500, background: '#0f0f18', borderRadius: 12, overflow: 'hidden', display: 'flex' }}>
        <Sidebar
          items={sampleItems}
          activeId="projects"
          collapsed={collapsed}
          onCollapse={setCollapsed}
        />
      </div>
    );
  },
};

export const WithHeaderFooter: Story = {
  args: {
    items: sampleItems,
    activeId: 'analytics',
    header: (
      <div style={{ padding: '16px', borderBottom: '1px solid #1c1c2e', fontWeight: 700, color: '#e2e0f0' }}>
        stack-journal
      </div>
    ),
    footer: (
      <div style={{ padding: '16px', borderTop: '1px solid #1c1c2e', fontSize: 12, color: '#55536a' }}>
        v2.0.0
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ height: 500, background: '#0f0f18', borderRadius: 12, overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};
