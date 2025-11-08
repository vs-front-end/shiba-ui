import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Row } from '@shiba-ui/browser';
import { TextDisplay } from '@shiba-ui/browser';

const meta: Meta<typeof Row> = {
  title: 'WEB - Components/Layout/Row',
  component: Row,
  parameters: {
    controls: {
      exclude: 'children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Row justify="center" gap={8} {...args}>
      <TextDisplay text="Item 1" />
      <TextDisplay text="Item 2" />
      <TextDisplay text="Item 3" />
    </Row>
  ),
};
