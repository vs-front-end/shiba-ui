import { ProgressBar } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'APP - Components/Feedback/ProgressBar',
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progressValue: 50,
  },
};
