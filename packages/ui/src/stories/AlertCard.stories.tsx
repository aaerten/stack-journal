import type { Meta, StoryObj } from '@storybook/react';
import { AlertCard } from '../components/molecules/AlertCard';

const meta: Meta<typeof AlertCard> = {
  title: 'Molecules/AlertCard',
  component: AlertCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertCard>;

export const Info: Story = {
  args: {
    title: 'New update available',
    message: 'A new version of the app is ready to install.',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    title: 'Payment successful',
    message: 'Your transaction has been completed.',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Low disk space',
    message: 'You have less than 1GB remaining.',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    title: 'Authentication failed',
    message: 'Invalid credentials. Please try again.',
    variant: 'danger',
    onDismiss: () => alert('Dismissed'),
  },
};

export const Dismissible: Story = {
  args: {
    title: 'Session expiring',
    message: 'Your session will expire in 5 minutes.',
    variant: 'warning',
    onDismiss: () => alert('Dismissed'),
  },
};
