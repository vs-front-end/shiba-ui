import { Separator } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Separator> = {
  title: 'APP - Components/Layout/Separator',
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
};
