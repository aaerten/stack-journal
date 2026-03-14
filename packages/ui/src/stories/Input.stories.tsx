import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/atoms/Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Email', placeholder: 'you@example.com' },
};

export const WithHelperText: Story = {
  args: { label: 'Username', placeholder: 'johndoe', helperText: 'Must be at least 3 characters.' },
};

export const WithError: Story = {
  args: { label: 'Password', type: 'password', error: 'Password is too short.' },
};

export const Disabled: Story = {
  args: { label: 'Disabled', placeholder: 'Cannot edit', disabled: true },
};
