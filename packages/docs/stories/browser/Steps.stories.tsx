import { Steps } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Steps> = {
  title: 'WEB - Components/Navigation/Steps',
  component: Steps,
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    steps: [
      { id: 1, status: 'success', label: 'Step 1' },
      { id: 2, status: 'error', label: 'Step 2' },
      { id: 3, status: 'active', label: 'Step 3' },
      { id: 4, status: 'disabled', label: 'Step 4' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    steps: [
      { id: 1, status: 'success', content: 'package', label: 'Order' },
      { id: 2, status: 'active', content: 'dollar-sign', label: 'Payment' },
      { id: 3, status: 'disabled', content: 'truck', label: 'Delivery' },
      { id: 4, status: 'disabled', content: 'check', label: 'Completed' },
    ],
  },
};
