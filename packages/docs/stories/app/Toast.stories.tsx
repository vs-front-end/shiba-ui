import React from 'react';
import { ToastContainer, toast } from '@shiba-ui/app';
import { Button } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';
import type { ToastType } from '@shiba-ui/shared';
import { View } from 'react-native';

const meta: Meta<typeof ToastContainer> = {
  title: 'APP - Components/Feedback/Toast',
  component: ToastContainer,
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;

export const Default: Story = {
  render: () => {
    const showToast = (message: string, type: ToastType) => {
      return toast[type](message);
    };

    return (
      <>
        <View
          style={{
            flex: 1,
            gap: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
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
          </View>
        </View>
        <ToastContainer />
      </>
    );
  },
};
