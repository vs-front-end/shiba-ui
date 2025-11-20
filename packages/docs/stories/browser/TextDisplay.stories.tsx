import { TextDisplay } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextDisplay> = {
  title: 'WEB - Components/Typography/TextDisplay',
  component: TextDisplay,
};

export default meta;
type Story = StoryObj<typeof TextDisplay>;

export const Default: Story = {
  args: {
    text: 'Hello World!',
  },
};
