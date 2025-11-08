import { NotificationDot } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationDot> = {
  title: 'WEB - Components/Feedback/NotificationDot',
  component: NotificationDot,
};

export default meta;
type Story = StoryObj<typeof NotificationDot>;

export const Default: Story = {
  args: {
    icon: 'bell',
    count: 5,
    size: 42,
    iconColor: 'content',
    dotColor: 'error',
  },
};
