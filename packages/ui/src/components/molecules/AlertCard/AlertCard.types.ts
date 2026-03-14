import type { BadgeVariant } from '../../atoms/Badge';

export interface AlertCardProps {
  title: string;
  message: string;
  variant?: BadgeVariant;
  onDismiss?: () => void;
}
