import React from 'react';
import { CounterInput } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof CounterInput> = {
  title: 'APP - Components/Forms/CounterInput',
  component: CounterInput,
};

export default meta;
type Story = StoryObj<typeof CounterInput>;

const CounterTemplate = (args: StoryObj<typeof CounterInput>['args']) => {
  const [value, setValue] = useState(args?.value || 50);
  const handleChange = (newValue: number) => {
    setValue(newValue);
    args?.handleChange?.(newValue);
  };
  return <CounterInput {...args} value={value} handleChange={handleChange} />;
};

export const Default: Story = {
  render: CounterTemplate,
  args: {
    value: 50,
    minValue: 0,
    maxValue: 100,
    increaseBy: 1,
  },
};
