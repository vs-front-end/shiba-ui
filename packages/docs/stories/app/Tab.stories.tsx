import React from 'react';
import { Tab } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Tab> = {
  title: 'APP - Components/Navigation/Tab',
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

const TabTemplate = (args: StoryObj<typeof Tab>['args']) => {
  const [activeValue, setActiveValue] = useState(
    args?.activeValue || args?.options?.[0]?.value
  );

  const handleValueChange = (value: string) => {
    setActiveValue(value);
    args?.handleValueChange?.(value);
  };

  return (
    <Tab
      {...args}
      options={args?.options || []}
      activeValue={activeValue || ''}
      handleValueChange={handleValueChange}
    />
  );
};

export const Default: Story = {
  render: TabTemplate,
  args: {
    options: [
      { value: 'posts', label: 'Posts' },
      { value: 'friends', label: 'Friends' },
      { value: 'messages', label: 'Messages' },
    ],
    activeValue: 'messages',
  },
};

export const WithIcons: Story = {
  render: TabTemplate,
  args: {
    options: [
      {
        value: 'profile',
        label: 'Profile',
        leftIcon: 'user',
        activeColor: 'primary',
      },
      {
        value: 'notifications',
        label: 'Notifications',
        leftIcon: 'bell',
        activeColor: 'secondary',
      },
      {
        value: 'settings',
        label: 'Settings',
        leftIcon: 'settings',
        activeColor: 'success',
      },
    ],
    activeValue: 'profile',
    borderColor: 'highlight',
  },
};
