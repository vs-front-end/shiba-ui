import { Radio } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'WEB - Components/Form/Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    onChange: (selected) => console.log('Selected:', selected),
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
    onChange: (selected) => console.log('Selected:', selected),
  },
};

export const Disabled: Story = {
  args: {
    isSelected: true,
    isDisabled: true,
  },
};
