import { Range } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Range> = {
  title: 'WEB - Components/Form/Range',
  component: Range,
};

export default meta;
type Story = StoryObj<typeof Range>;

export const Default: Story = {
  args: {},
};
