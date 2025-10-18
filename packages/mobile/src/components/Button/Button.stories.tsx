import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Mobile/Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    text: 'Botão de Teste Mobile',
  },
};
