import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@shiba-ui/browser';
import { TextDisplay } from '@shiba-ui/browser';

const meta: Meta<typeof Separator> = {
  title: 'WEB - Components/Layout/Separator',
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: args.orientation === 'vertical' ? 'row' : 'column',
        alignItems: 'center',
        padding: '20px',
        gap: '8px',
        height: '120px',
      }}
    >
      <TextDisplay text={args.orientation === 'vertical' ? 'Left' : 'Top'} />
      <Separator {...args} />
      <TextDisplay
        text={args.orientation === 'vertical' ? 'Right' : 'Bottom'}
      />
    </div>
  ),
};
