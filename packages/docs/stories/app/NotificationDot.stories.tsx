import { NotificationDot } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationDot> = {
  title: 'APP - Components/Feedback/NotificationDot',
  component: NotificationDot,
};

export default meta;
type Story = StoryObj<typeof NotificationDot>;

export const Default: Story = {
  args: {
    count: 5,
  },
};
