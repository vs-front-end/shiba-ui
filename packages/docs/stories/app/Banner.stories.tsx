import React from 'react';
import { Banner, TextDisplay } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Banner> = {
  title: 'APP - Components/Feedback/Banner',
  component: Banner,
  parameters: {
    controls: {
      exclude: 'children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    children: (
      <TextDisplay
        text="The new API is now live."
        fontSize={14}
        fontWeight="medium"
        color="paper"
      />
    ),
  },
};
