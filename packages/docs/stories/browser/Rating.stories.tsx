import { Rating } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Rating> = {
  title: 'WEB - Components/Feedback/Rating',
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    rating: 3,
    maxStars: 5,
    size: 30,
    background: 'warning',
  },
};
