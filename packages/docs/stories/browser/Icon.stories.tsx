import { Icon } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Web/Components/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    icon: 'coffee',
    size: 48,
    color: 'content',
  },
};

