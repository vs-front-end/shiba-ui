import React from 'react';
import { OtpInput } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof OtpInput> = {
  title: 'WEB - Components/Form/OtpInput',
  component: OtpInput,
};

export default meta;
type Story = StoryObj<typeof OtpInput>;

const OtpTemplate = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    args.handleChange?.(newValue);
  };

  return <OtpInput {...args} value={value} handleChange={handleChange} />;
};

export const Default: Story = {
  render: OtpTemplate,
  args: {
    length: 5,
    handleChange: (value: string) => console.log('Valor alterado:', value),
  },
};
