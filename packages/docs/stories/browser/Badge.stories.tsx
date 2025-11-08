import { Badge } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'WEB - Components/Feedback/Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: 'Badge',
    background: 'primary',
    textColor: 'content',
  },
};

export const WithIcons: Story = {
  args: {
    text: 'Badge',
    leftIcon: 'star',
    rightIcon: 'heart',
    background: 'primary',
    textColor: 'content',
  },
};
