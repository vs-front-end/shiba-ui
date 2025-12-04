import React from 'react';
import { useUIOverlay, Button, UIOverlayProvider } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'WEB - Components/Feedback/Dialog',
  parameters: {
    docs: {
      description: {
        component: `
The \`Dialog\` component is used to display modal dialogs for confirmations, alerts, and important messages in your web application.

## Setup

The \`Dialog\` is managed through the \`UIOverlayProvider\` and \`useUIOverlay\` hook. Make sure to wrap your app with the \`UIOverlayProvider\`:

\`\`\`tsx
import { ThemeProvider, UIOverlayProvider } from '@shiba-ui/browser';

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
import { useUIOverlay } from '@shiba-ui/browser';

function MyComponent() {
  const { openDialog } = useUIOverlay();

  const handleDelete = () => {
    openDialog({
      title: 'Delete item',
      message: 'Are you sure you want to delete this item?',
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

  return <Button text="Delete" onClick={handleDelete} />;
}
\`\`\`
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
      <Button
        text="Open Dialog"
        onClick={() =>
          openDialog({
            title: 'Delete item',
            message: 'Are you sure you want to delete this item?',
            confirmText: 'Confirm',
            cancelText: 'Cancel',
            onConfirm: () => alert('Confirmed!'),
            onCancel: () => alert('Cancelled!'),
          })
        }
      />
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <UIOverlayProvider>
      <DialogExample />
    </UIOverlayProvider>
  ),
};

