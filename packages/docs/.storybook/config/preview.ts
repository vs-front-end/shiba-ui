import type { Preview } from "@storybook/react-webpack5";
import { themeDecorator } from "../decorators/ThemeDecorator";

const theme =
  typeof window !== "undefined" ? localStorage.getItem("theme") : null;

export const decorators = [themeDecorator];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme selector",
    defaultValue: theme || "dark",
    toolbar: {
      items: [
        { value: "dark", title: "Dark Theme", icon: "moon" },
        { value: "light", title: "Light Theme", icon: "sun" },
        { value: "ocean", title: "Ocean Theme", icon: "circlehollow" },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  tags: ["autodocs", "!dev"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
  initialGlobals: { theme: theme || "dark" },
};

export default preview;
