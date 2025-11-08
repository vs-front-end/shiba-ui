import { ProgressCircle } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressCircle> = {
  title: 'WEB - Components/Feedback/ProgressCircle',
  component: ProgressCircle,
};

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  args: {
    progressValue: 50,
    size: 80,
  },
};
