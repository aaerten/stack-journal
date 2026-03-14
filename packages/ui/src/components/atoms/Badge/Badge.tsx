import React from 'react';
import type { BadgeProps } from './Badge.types';

const variantStyles: Record<string, { background: string; color: string }> = {
  default: { background: '#e5e7eb', color: '#374151' },
  success: { background: '#d1fae5', color: '#065f46' },
  warning: { background: '#fef3c7', color: '#92400e' },
  danger:  { background: '#fee2e2', color: '#991b1b' },
  info:    { background: '#dbeafe', color: '#1e40af' },
};

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'default' }) => {
  const styles = variantStyles[variant];
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: 500,
      ...styles,
    }}>
      {label}
    </span>
  );
};
