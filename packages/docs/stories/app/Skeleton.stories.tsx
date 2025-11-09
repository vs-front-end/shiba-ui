import { Skeleton } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  title: 'APP - Components/Feedback/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 100,
    height: 100,
  },
};
