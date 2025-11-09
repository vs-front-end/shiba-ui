import React from 'react';
import { ToastContainer, toast } from '@shiba-ui/browser';
import { Button } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';
import { ToastType } from '@shiba-ui/shared';

const meta: Meta<typeof ToastContainer> = {
  title: 'WEB - Components/Feedback/Toast',
  component: ToastContainer,
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;

export const Default: Story = {
  render: () => {
    const showToast = (message: string, type: ToastType) => {
      return toast[type](message, { width: 280 });
    };

    return (
      <>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button
            text="Success"
            onClick={() => showToast('Shiba UI - Toast Success', 'success')}
            background="success"
            width={100}
          />
          <Button
            text="Warning"
            onClick={() => showToast('Shiba UI - Toast Warning', 'warning')}
            background="warning"
            width={100}
          />
          <Button
            text="Error"
            onClick={() => showToast('Shiba UI - Toast Error', 'error')}
            background="error"
            width={100}
          />
          <Button
            text="Custom"
            onClick={() =>
              toast.success('Shiba UI - Toast Custom', {
                background: 'primary',
                icon: 'bookmark',
                color: 'paper',
                timeout: 5000,
                borderRadius: 32,
              })
            }
            background="primary"
            width={100}
          />
        </div>
        <ToastContainer />
      </>
    );
  },
};
