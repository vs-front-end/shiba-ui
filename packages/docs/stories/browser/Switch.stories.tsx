import { Switch } from "@shiba-ui/browser";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  title: "WEB - Components/Form/Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    onChange: (isChecked) => console.log("Checked:", isChecked),
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    onChange: (isChecked) => console.log("Checked:", isChecked),
  },
};

export const Disabled: Story = {
  args: {
    isChecked: true,
    isDisabled: true,
  },
};
