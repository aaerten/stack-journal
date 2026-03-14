import React from 'react';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import type { AlertCardProps } from './AlertCard.types';

const variantBg: Record<string, string> = {
  default: '#f9fafb',
  success: '#f0fdf4',
  warning: '#fffbeb',
  danger:  '#fef2f2',
  info:    '#eff6ff',
};

const variantBorder: Record<string, string> = {
  default: '#e5e7eb',
  success: '#bbf7d0',
  warning: '#fde68a',
  danger:  '#fecaca',
  info:    '#bfdbfe',
};

export const AlertCard: React.FC<AlertCardProps> = ({
  title,
  message,
  variant = 'info',
  onDismiss,
}) => {
  return (
    <div style={{
      padding: '16px',
      borderRadius: '8px',
      border: `1px solid ${variantBorder[variant]}`,
      background: variantBg[variant],
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Badge label={variant.toUpperCase()} variant={variant} />
          <span style={{ fontWeight: 600, fontSize: '14px' }}>{title}</span>
        </div>
        {onDismiss && (
          <Button variant="ghost" size="sm" onClick={onDismiss}>✕</Button>
        )}
      </div>
      <p style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>{message}</p>
    </div>
  );
};
