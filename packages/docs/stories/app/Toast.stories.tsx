import React from 'react';
import { ToastContainer, toast } from '@shiba-ui/app';
import { Button } from '@shiba-ui/app';
import type { Meta, StoryObj } from '@storybook/react';
import type { ToastType } from '@shiba-ui/shared';
import { View } from 'react-native';

const meta: Meta<typeof ToastContainer> = {
  title: 'APP - Components/Feedback/Toast',
  component: ToastContainer,
  parameters: {
    docs: {
      description: {
        component: `
The \`ToastContainer\` component is used to display toast notifications in your React Native application.

## Setup

Add the \`ToastContainer\` to your app root:

\`\`\`tsx
import { ToastContainer, toast } from '@shiba-ui/app';

function App() {
  return (
    <>
      {/* Your app content */}
      <ToastContainer />
    </>
  );
}
\`\`\`

## Usage

Use the toast functions to display messages:

\`\`\`tsx
import { toast } from '@shiba-ui/app';

// Success toast
toast.success('Operation completed successfully');

// Error toast
toast.error('Something went wrong');

// Warning toast
toast.warning('Please check your input');
\`\`\`

## Customization

You can customize the toast appearance:

\`\`\`tsx
toast.success('Custom toast', {
  background: 'primary',
  color: 'paper',
  icon: 'check-circle',
  timeout: 5000,
  borderRadius: 32,
});
\`\`\`

## Props

- **message**: The message text to display
- **timeout**: Auto-close timeout in milliseconds (default: 3000)
- **background**: Background color from theme
- **color**: Text color from theme
- **icon**: Icon to display (optional)
- **borderRadius**: Border radius in pixels
        `,
      },
    },
  },
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
              onPress={() => showToast('Shiba UI - Toast Success', 'success')}
              background="success"
              width={100}
            />
            <Button
              text="Warning"
              onPress={() => showToast('Shiba UI - Toast Warning', 'warning')}
              background="warning"
              width={100}
            />
            <Button
              text="Error"
              onPress={() => showToast('Shiba UI - Toast Error', 'error')}
              background="error"
              width={100}
            />
            <Button
              text="Custom"
              onPress={() =>
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
