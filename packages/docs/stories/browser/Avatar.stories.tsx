import { Avatar } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'WEB - Components/Feedback/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    image: 'https://encurtador.com.br/Kw9pE',
    size: 100,
  },
};

export const AvatarText: Story = {
  args: {
    username: 'John Doe',
    size: 100,
  },
};
