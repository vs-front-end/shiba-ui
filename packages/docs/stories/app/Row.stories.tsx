import React from 'react';
import { Row, TextDisplay } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Row> = {
  title: 'APP - Components/Layout/Row',
  component: Row,
  parameters: {
    controls: {
      exclude: 'children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Default: Story = {
  args: {
    align: 'center',
    gap: 8,
    justify: 'center',
    children: (
      <>
        <TextDisplay text="Item 1" />
        <TextDisplay text="Item 2" />
        <TextDisplay text="Item 3" />
      </>
    ),
  },
};
