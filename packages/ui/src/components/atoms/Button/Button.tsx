import React from 'react';
import type { ButtonProps } from './Button.types';

const variantStyles: Record<string, string> = {
  primary: 'background:#2563eb;color:#fff;border:none;',
  secondary: 'background:#e5e7eb;color:#111;border:none;',
  danger: 'background:#dc2626;color:#fff;border:none;',
  ghost: 'background:transparent;color:#2563eb;border:1px solid #2563eb;',
};

const sizeStyles: Record<string, string> = {
  sm: 'padding:4px 10px;font-size:12px;',
  md: 'padding:8px 16px;font-size:14px;',
  lg: 'padding:12px 24px;font-size:16px;',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  style,
  ...rest
}) => {
  const baseStyle = `
    display:inline-flex;
    align-items:center;
    gap:8px;
    border-radius:6px;
    font-weight:500;
    cursor:${disabled || isLoading ? 'not-allowed' : 'pointer'};
    opacity:${disabled || isLoading ? '0.6' : '1'};
    transition:opacity 0.2s;
    ${variantStyles[variant]}
    ${sizeStyles[size]}
  `;

  return (
    <button
      style={{ ...Object.fromEntries(baseStyle.split(';').filter(Boolean).map(s => {
        const [k, ...v] = s.trim().split(':');
        return [k.trim().replace(/-([a-z])/g, (_,c) => c.toUpperCase()), v.join(':').trim()];
      })), ...style }}
      disabled={disabled || isLoading}
      {...rest}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {isLoading ? 'Loading...' : children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
