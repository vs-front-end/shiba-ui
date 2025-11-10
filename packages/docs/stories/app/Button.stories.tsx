import { Button } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'APP - Components/Form/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Button',
    onClick: () => console.log('Clicked'),
  },
};
