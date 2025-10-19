import type { Preview } from '@storybook/react-webpack5';

const preview: Preview = {
  tags: ['autodocs', '!dev'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default preview;
