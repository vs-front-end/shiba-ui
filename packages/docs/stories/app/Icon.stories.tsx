import { Icon } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Mobile/Components/Icon',
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
