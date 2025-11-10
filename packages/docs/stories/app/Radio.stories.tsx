import { Radio } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'APP - Components/Form/Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    onChange: (selected) => console.log(selected),
  },
};
