import { Button } from "@shiba-ui/browser";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "WEB - Components/Form/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "Click me",
    onClick: () => console.log("Clicked!"),
    width: 200,
    height: 40,
    background: "primary",
    textColor: "paper",
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled",
    isDisabled: true,
    width: 200,
    height: 40,
  },
};

export const Loading: Story = {
  args: {
    text: "Loading",
    isLoading: true,
    width: 200,
    height: 40,
  },
};

export const WithIcons: Story = {
  args: {
    text: "With Icons",
    leftIcon: "star",
    rightIcon: "heart",
    width: 200,
    height: 40,
  },
};
