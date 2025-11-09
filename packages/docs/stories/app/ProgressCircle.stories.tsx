import { ProgressCircle } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressCircle> = {
  title: 'APP - Components/Feedback/ProgressCircle',
  component: ProgressCircle,
};

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  args: {
    progressValue: 50,
  },
};

