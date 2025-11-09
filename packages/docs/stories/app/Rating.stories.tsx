import { Rating } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Rating> = {
  title: 'APP - Components/Feedback/Rating',
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    rating: 3,
    handleChange: (rating) => console.log(rating),
  },
};
