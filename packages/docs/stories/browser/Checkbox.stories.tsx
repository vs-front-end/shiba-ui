import { Checkbox } from "@shiba-ui/browser";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "WEB - Components/Form/Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    onChange: (checked) => console.log("Checked:", checked),
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    onChange: (checked) => console.log("Checked:", checked),
  },
};

export const Disabled: Story = {
  args: {
    isChecked: true,
    isDisabled: true,
  },
};