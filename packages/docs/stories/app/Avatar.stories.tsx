import { Avatar } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'APP - Components/Feedback/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 100,
    username: 'John Doe',
    image: 'https://encurtador.com.br/Kw9pE',
  },
};
