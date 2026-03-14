import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '../components/molecules/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Search for anything...',
    buttonLabel: 'Search',
    onSearch: (value) => alert(`Searching: ${value}`),
  },
};

export const Loading: Story = {
  args: {
    placeholder: 'Search...',
    isLoading: true,
    onSearch: () => {},
  },
};

export const CustomLabel: Story = {
  args: {
    placeholder: 'Enter city name...',
    buttonLabel: 'Find',
    onSearch: (value) => alert(`Finding: ${value}`),
  },
};
