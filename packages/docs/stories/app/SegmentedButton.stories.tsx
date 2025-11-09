import React from 'react';
import { SegmentedButton } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof SegmentedButton> = {
  title: 'APP - Components/Navigation/SegmentedButton',
  component: SegmentedButton,
};

export default meta;
type Story = StoryObj<typeof SegmentedButton>;

const SegmentedTemplate = (args: StoryObj<typeof SegmentedButton>['args']) => {
  const [activeValue, setActiveValue] = useState(
    args?.activeValue || args?.options?.[0]?.value
  );

  const handleValueChange = (value: string) => {
    setActiveValue(value);
    args?.handleValueChange?.(value);
  };

  return (
    <SegmentedButton
      {...args}
      options={args?.options || []}
      activeValue={activeValue}
      handleValueChange={handleValueChange}
    />
  );
};

export const Default: Story = {
  render: SegmentedTemplate,
  args: {
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
    ],
    activeValue: 'day',
  },
};

export const WithIcons: Story = {
  render: SegmentedTemplate,
  args: {
    options: [
      {
        value: 'profile',
        label: 'Profile',
        leftIcon: 'user',
        activeBackground: 'primary',
      },
      {
        value: 'contact',
        label: 'Contact',
        leftIcon: 'phone',
        activeBackground: 'secondary',
      },
      {
        value: 'message',
        label: 'Message',
        leftIcon: 'message-circle',
        activeBackground: 'error',
      },
    ],
    background: undefined,
    borderColor: 'highlight',
  },
};
