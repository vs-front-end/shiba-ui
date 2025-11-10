import { TextInput } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'APP - Components/Form/TextInput',
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    handleChange: (value) => console.log(value),
  },
};
