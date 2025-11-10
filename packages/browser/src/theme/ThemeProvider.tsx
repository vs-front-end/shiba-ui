import { useMemo } from 'react';
import type { ReactNode } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  StyleSheetManager,
} from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import {
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  COMMON_COLORS,
  FONT_WEIGHT,
} from '@shiba-ui/shared';

import type { Theme, ThemeVariant } from '@shiba-ui/shared';

import { GlobalStyles } from './globalStyles';

interface CustomTheme {
  colors?: Partial<Theme['colors']>;
  fontWeight?: Partial<Theme['fontWeight']>;
  fontFamily?: string;
}

interface ThemeProviderProps {
  children: ReactNode;
  selectedTheme?: ThemeVariant;
  fontFamily?: string;
  customTheme?: CustomTheme;
}

export const ThemeProvider = ({
  children,
  selectedTheme = 'light',
  fontFamily = 'Georgia, sans-serif',
  customTheme,
}: ThemeProviderProps) => {
  const theme = useMemo(() => {
    let baseColorTheme = LIGHT_THEME;

    if (selectedTheme === 'dark') baseColorTheme = DARK_THEME;
    if (selectedTheme === 'ocean') baseColorTheme = OCEAN_THEME;

    const baseColors = {
      ...baseColorTheme,
      ...COMMON_COLORS,
    };

    const colors = customTheme?.colors
      ? { ...baseColors, ...customTheme.colors }
      : baseColors;

    const finalTheme = {
      colors,
      fontWeight: customTheme?.fontWeight || FONT_WEIGHT,
      fontFamily: customTheme?.fontFamily || fontFamily,
    };

    return finalTheme as Theme;
  }, [selectedTheme, fontFamily, customTheme]);

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </StyleSheetManager>
  );
};
