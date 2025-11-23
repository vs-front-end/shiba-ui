import type { ColorKeys } from '../theme';

export const getButtonTextColor = (
  textColor?: ColorKeys,
  variant?: 'solid' | 'outlined' | 'text'
) => {
  if (textColor) return textColor;
  if (variant === 'solid') return 'paper';
  return 'content';
};
