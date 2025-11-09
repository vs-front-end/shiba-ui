import React from 'react';
import { StackedChart } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StackedChart> = {
  title: 'WEB - Components/Feedback/StackedChart',
  component: StackedChart,
};

export default meta;
type Story = StoryObj<typeof StackedChart>;

export const Default: Story = {
  args: {
    data: [
      {
        percent: 45,
        color: 'secondary',
        label: 'React',
        onClick: () => alert('Color secondary clicked!'),
      },
      {
        percent: 20,
        color: 'primary',
        label: 'Typescript',
        onClick: () => alert('Color primary clicked!'),
      },
      {
        percent: 15,
        color: 'error',
        label: 'Storybook',
        onClick: () => alert('Color error clicked!'),
      },
      {
        percent: 20,
        color: 'alternative',
        label: 'CSS-in-JS',
        onClick: () => alert('Color tertiary clicked!'),
      },
    ],
  },
};
