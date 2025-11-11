import React from 'react';
import { Column, TextDisplay } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Column> = {
  title: 'APP - Components/Layout/Column',
  component: Column,
  parameters: {
    controls: {
      exclude: 'children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Column>;

export const Default: Story = {
  args: {
    align: 'center',
    gap: 8,
    children: (
      <>
        <TextDisplay text="Item 1" />
        <TextDisplay text="Item 2" />
        <TextDisplay text="Item 3" />
      </>
    ),
  },
};
