import React from 'react';
import type { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  id,
  style,
  ...rest
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          padding: '8px 12px',
          borderRadius: '6px',
          border: `1px solid ${error ? '#dc2626' : '#d1d5db'}`,
          fontSize: '14px',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          ...style,
        }}
        {...rest}
      />
      {error && <span style={{ fontSize: '12px', color: '#dc2626' }}>{error}</span>}
      {helperText && !error && <span style={{ fontSize: '12px', color: '#6b7280' }}>{helperText}</span>}
    </div>
  );
};
