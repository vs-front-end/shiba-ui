import React from 'react';
import { useUIOverlay, Button } from '@shiba-ui/app';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'APP - Components/Feedback/Dialog',
  parameters: {
    docs: {
      description: {
        component: `
The \`Dialog\` component is used to display modal dialogs for confirmations, alerts, and important messages in your React Native application.

## Setup

The \`Dialog\` is managed through the \`UIOverlayProvider\` and \`useUIOverlay\` hook. Make sure to wrap your app with the \`UIOverlayProvider\`:

\`\`\`tsx
import { ThemeProvider, UIOverlayProvider } from '@shiba-ui/app';

function App() {
  return (
    <ThemeProvider>
      <UIOverlayProvider>
        {/* Your app content */}
      </UIOverlayProvider>
    </ThemeProvider>
  );
}
\`\`\`

## Usage

Use the \`useUIOverlay\` hook to open dialogs from anywhere in your app:

\`\`\`tsx
import { useUIOverlay } from '@shiba-ui/app';

function MyComponent() {
  const { openDialog } = useUIOverlay();

  const handleDelete = () => {
    openDialog({
      title: 'Delete client',
      message: 'Are you sure you want to delete this client?',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      onConfirm: () => {
        // Handle confirmation
        console.log('Confirmed!');
      },
      onCancel: () => {
        // Handle cancellation
        console.log('Cancelled!');
      },
    });
  };

  return <Button text="Delete" onPress={handleDelete} />;
}
\`\`\`

## Customization

You can customize the dialog appearance and behavior:

\`\`\`tsx
openDialog({
  title: 'Warning',
  message: 'This action cannot be undone.',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  titleColor: 'warning',
  messageColor: 'content',
  confirmColor: 'error',
  cancelColor: 'accent',
  confirmVariant: 'solid',
  cancelVariant: 'outlined',
  background: 'section',
  borderRadius: 12,
  showConfirm: true,
  showCancel: true,
  onConfirm: () => {},
  onCancel: () => {},
});
\`\`\`

## Props

- **title**: Dialog title text
- **message**: Dialog message/content text
- **confirmText**: Text for confirm button (default: "Confirm")
- **cancelText**: Text for cancel button (default: "Cancel")
- **showConfirm**: Show confirm button (default: true)
- **showCancel**: Show cancel button (default: true)
- **onConfirm**: Callback when confirm is pressed
- **onCancel**: Callback when cancel is pressed
- **confirmVariant**: Confirm button variant - 'solid' | 'outlined' | 'text' (default: 'solid')
- **cancelVariant**: Cancel button variant - 'solid' | 'outlined' | 'text' (default: 'outlined')
- **confirmColor**: Confirm button color from theme
- **cancelColor**: Cancel button color from theme
- **titleColor**: Title color from theme (default: 'primary')
- **messageColor**: Message color from theme (default: 'content')
- **background**: Background color from theme (default: 'section')
- **borderRadius**: Border radius in pixels (default: 12)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const DialogExample = () => {
  const { openDialog } = useUIOverlay();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        text="Open Dialog"
        onPress={() =>
          openDialog({
            title: 'Delete client',
            message: 'Are you sure you want to delete the client Marcos Junior?',
            confirmText: 'Confirm',
            cancelText: 'Cancel',
          })
        }
        variant="solid"
      />
    </View>
  );
};

export const Default: Story = {
  render: () => <DialogExample />,
};
