import { Spinner } from "@shiba-ui/browser";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Spinner> = {
  title: "WEB - Components/Feedback/Spinner",
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 32,
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    size: 16,
    color: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: 48,
    color: "success",
  },
};
