import React from 'react';
import { Banner, Column, TextDisplay } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Banner> = {
  title: 'WEB - Components/Feedback/Banner',
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    children: (
      <Column gap={4}>
        <TextDisplay fontSize={14} color="content" text="Permission Updated" />
        <TextDisplay
          fontSize={14}
          color="accent"
          text="Your user level has been updated. Visit the User page to review the changes."
        />
      </Column>
    ),
  },
};
