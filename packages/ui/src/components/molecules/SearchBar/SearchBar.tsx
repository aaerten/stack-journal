import React, { useState } from 'react';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  buttonLabel = 'Search',
  onSearch,
  isLoading = false,
  defaultValue = '',
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleSearch = () => {
    if (value.trim()) onSearch(value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Button
        variant="primary"
        onClick={handleSearch}
        isLoading={isLoading}
        disabled={!value.trim()}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};
