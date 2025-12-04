import type { ColorKeys } from '../theme';

export const getBtnContentColor = (
  color?: ColorKeys,
  variant?: 'solid' | 'outlined' | 'text'
) => {
  if (color) return color;
  if (variant === 'solid') return 'paper';
  return 'content';
};
