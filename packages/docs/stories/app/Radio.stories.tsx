import { Radio } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'APP - Components/Forms/Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    onChange: (selected) => console.log(selected),
  },
};
