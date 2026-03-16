import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/organisms/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const sampleItems = [
  { label: 'Dashboard', href: '/', isActive: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Analytics', href: '/analytics', badge: 3 },
  { label: 'Settings', href: '/settings' },
];

export const Default: Story = {
  args: {
    logo: <span style={{ fontWeight: 800, fontSize: 20 }}>stack<span style={{ color: '#7c6af7' }}>-journal</span></span>,
    items: sampleItems,
  },
};

export const WithRightSlot: Story = {
  args: {
    logo: <span style={{ fontWeight: 800, fontSize: 20 }}>stack<span style={{ color: '#7c6af7' }}>-journal</span></span>,
    items: sampleItems,
    rightSlot: (
      <button style={{ background: '#7c6af7', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }}>
        Sign In
      </button>
    ),
  },
};

export const Transparent: Story = {
  args: {
    ...Default.args,
    variant: 'transparent',
  },
};

export const NoItems: Story = {
  args: {
    logo: <span style={{ fontWeight: 800, fontSize: 20 }}>stack<span style={{ color: '#7c6af7' }}>-journal</span></span>,
  },
};
