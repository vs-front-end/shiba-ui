import { Breadcrumb } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'WEB - Components/Navigation/Breadcrumb',
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home' },
      { label: 'Products' },
      { label: 'Electronics' },
      { label: 'Smartphones', isActive: true },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        label: 'Dashboard',
        icon: 'home',
        iconSize: 14,
      },
      {
        label: 'Users',
        icon: 'user',
        iconSize: 14,
      },
      {
        label: 'Profile',
        icon: 'settings',
        iconSize: 14,
        isActive: true,
      },
    ],
  },
};

export const TruncatedLong: Story = {
  args: {
    items: [
      { label: 'Home' },
      { label: 'Users' },
      { label: 'Profiles' },
      { label: 'Settings' },
      { label: 'Current Page', isActive: true },
    ],
    maxItems: 4,
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Dashboard' },
      { label: 'Users' },
      { label: 'Profile', isActive: true },
    ],
    separator: '>',
    color: 'secondary',
    activeColor: 'success',
    separatorColor: 'highlight',
  },
};
