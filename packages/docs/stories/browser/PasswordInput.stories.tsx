import { PasswordInput } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PasswordInput> = {
  title: 'WEB - Components/Form/PasswordInput',
  component: PasswordInput,
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your password',
  },
};
