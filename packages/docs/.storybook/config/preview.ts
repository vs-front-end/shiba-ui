import type { Preview } from '@storybook/react-webpack5';
import { themeDecorator } from '../decorators/ThemeDecorator';

const PREVIEW_THEME = {
  LIGHT: '#F5F5FB',
  DARK: '#121212',
  OCEAN: '#151B30',
} as const;

const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

export const decorators = [themeDecorator];

const preview: Preview = {
  tags: ['autodocs', '!dev'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      options: {
        dark: { name: 'dark', value: PREVIEW_THEME.DARK },
        light: { name: 'light', value: PREVIEW_THEME.LIGHT },
        ocean: { name: 'ocean', value: PREVIEW_THEME.OCEAN },
      },
    },
  },
  initialGlobals: { backgrounds: { value: theme || 'dark' } },
};

export default preview;
