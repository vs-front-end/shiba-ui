import { TextDisplay } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextDisplay> = {
  title: 'APP - Components/Typography/TextDisplay',
  component: TextDisplay,
};

export default meta;
type Story = StoryObj<typeof TextDisplay>;

export const Default: Story = {
  args: {
    text: 'Text Display',
  },
};
