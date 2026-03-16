import type { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  isActive?: boolean;
  badge?: string | number;
}

export interface NavbarProps {
  logo?: ReactNode;
  items?: NavItem[];
  rightSlot?: ReactNode;
  variant?: 'default' | 'transparent';
  className?: string;
}
