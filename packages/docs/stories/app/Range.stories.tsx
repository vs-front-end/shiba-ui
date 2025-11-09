import { Range } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Range> = {
  title: 'APP - Components/Forms/Range',
  component: Range,
};

export default meta;
type Story = StoryObj<typeof Range>;

export const Default: Story = {
  args: {
    width: undefined,
    value: 30,
    height: undefined,
    background: 'primary',
  },
};
