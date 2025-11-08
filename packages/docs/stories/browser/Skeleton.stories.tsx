import React from 'react';
import { Skeleton } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  title: 'WEB - Components/Feedback/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const FullSize: Story = {
  args: {
    isFullSize: true,
    height: 60,
  },
  render: (args) => <Skeleton {...args} isFullSize={true} />,
};
