import React from 'react';
import { Banner, TextDisplay } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Banner> = {
  title: 'APP - Components/Feedback/Banner',
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    children: (
      <TextDisplay
        text="The integration with the new API is now live. You can start using it in your projects."
        fontSize={14}
        fontWeight="medium"
        color="paper"
      />
    ),
  },
};
