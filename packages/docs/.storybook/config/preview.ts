import type { Preview } from '@storybook/react-webpack5';
import { themeDecorator } from '../decorators/ThemeDecorator/ThemeDecorator';

export const decorators = [themeDecorator];

const preview: Preview = {
  tags: ['autodocs', '!dev'],
  parameters: { layout: 'fullscreen' },
};

export default preview;
