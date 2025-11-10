import { useMemo } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  COMMON_COLORS,
  FONT_WEIGHT,
} from '@shiba-ui/shared';

import type { Theme, ThemeVariant } from '@shiba-ui/shared';

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
  fontFamily,
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
      fontFamily: customTheme?.fontFamily || fontFamily || 'System',
    };

    return finalTheme as Theme;
  }, [selectedTheme, fontFamily, customTheme]);

  return (
    <SafeAreaProvider>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </SafeAreaProvider>
  );
};
