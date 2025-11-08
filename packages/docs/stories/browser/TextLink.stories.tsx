import { TextLink } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextLink> = {
  title: 'WEB - Components/Typography/TextLink',
  component: TextLink,
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
  args: {
    text: 'Click here to visit',
    href: 'https://github.com/vs-front-end/shiba-ui',
    fontSize: 16,
    fontWeight: 'regular',
    color: 'content',
    hoverColor: 'primary',
    textAlign: 'left',
    textDecoration: 'underline',
    isExternal: true,
  },
};
