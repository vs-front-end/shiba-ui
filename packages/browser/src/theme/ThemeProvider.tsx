import { ReactNode, useMemo } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  StyleSheetManager,
} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import {
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  COMMON_COLORS,
  Theme,
  ThemeVariant,
  FONT_WEIGHT,
} from "@shiba-ui/shared";

interface ThemeProviderProps {
  children: ReactNode;
  selectedTheme?: ThemeVariant;
}

export const ThemeProvider = ({
  children,
  selectedTheme = "light",
}: ThemeProviderProps) => {
  const theme = useMemo(() => {
    let baseColorTheme = LIGHT_THEME;

    if (selectedTheme === "dark") baseColorTheme = DARK_THEME;
    if (selectedTheme === "ocean") baseColorTheme = OCEAN_THEME;

    const colors = {
      ...baseColorTheme,
      ...COMMON_COLORS,
    };

    return { colors, fontWeight: FONT_WEIGHT } as Theme;
  }, [selectedTheme]);

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </StyleSheetManager>
  );
};
