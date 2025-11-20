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
      { value: 'settings', label: 'Settings' },
    ],
    activeValue: 'settings',
  },
};

export const WithIcons: Story = {
  render: TabTemplate,
  args: {
    options: [
      {
        value: 'user',
        label: 'User',
        leftIcon: 'user',
        activeColor: 'primary',
      },
      {
        value: 'friends',
        label: 'Friends',
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
    activeValue: 'settings',
  },
};
