import React from 'react';
import { Accordion, TextDisplay } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  title: 'WEB - Components/Viewers/Accordion',
  component: Accordion,
  parameters: {
    controls: {
      exclude: 'children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: 'Bug Fix Implemented - Ticket N° 5878',
    icon: 'info',
    children: (
      <TextDisplay
        text="We have resolved a previously reported issue. This fix improves stability and ensures smoother performance going forward."
        fontSize={14}
        color="accent"
      />
    ),
  },
};
