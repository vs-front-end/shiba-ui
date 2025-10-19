import { Theme } from '../theme/theme';

export const getThemeWeb = (color: string): string => {
  if (color.startsWith('#')) return color;
  return `var(--${color})`;
};

export const getThemeApp = (color: string, theme: Theme): string => {
  if (color.startsWith('#')) return color;
  return theme.colors[color as keyof typeof theme.colors] || color;
};

export const convertIconName = (iconName: string): string => {
  const separatedIconName = iconName.split('-');

  const capitalizedWords = separatedIconName.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords.join('');
};
