import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "@shiba-ui/browser";
import { Button } from "@shiba-ui/browser";
import { TextDisplay } from "@shiba-ui/browser";
import { Column } from "@shiba-ui/browser";

const meta: Meta<typeof Drawer> = {
  title: "WEB - Components/Overlays/Drawer",
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button text="Open Drawer!" onClick={() => setIsOpen(true)} />

      <Drawer
        isOpen={isOpen}
        width="320px"
        background="section"
        onClose={() => setIsOpen(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "24px",
            padding: "16px 0",
          }}
        >
          <Column gap={16}>
            <TextDisplay text="Drawer Title" fontSize={20} fontWeight="bold" />
            <TextDisplay text="This is a drawer component example with some content." />
          </Column>

          <Button
            text="Close Drawer"
            onClick={() => setIsOpen(false)}
            background="secondary"
          />
        </div>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  render: () => <DrawerExample />,
};
