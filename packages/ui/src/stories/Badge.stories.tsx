import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/atoms/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { label: 'Default', variant: 'default' },
};

export const Success: Story = {
  args: { label: 'Success', variant: 'success' },
};

export const Warning: Story = {
  args: { label: 'Warning', variant: 'warning' },
};

export const Danger: Story = {
  args: { label: 'Danger', variant: 'danger' },
};

export const Info: Story = {
  args: { label: 'Info', variant: 'info' },
};
