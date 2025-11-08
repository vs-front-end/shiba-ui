import { ReactNode, useMemo } from 'react';
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
  Theme,
  ThemeVariant,
  FONT_WEIGHT,
} from '@shiba-ui/shared';

import { GlobalStyles } from './globalStyles';

interface ThemeProviderProps {
  children: ReactNode;
  selectedTheme?: ThemeVariant;
  fontFamily?: string;
}

export const ThemeProvider = ({
  children,
  selectedTheme = 'light',
  fontFamily = 'Poppins',
}: ThemeProviderProps) => {
  const theme = useMemo(() => {
    let baseColorTheme = LIGHT_THEME;

    if (selectedTheme === 'dark') baseColorTheme = DARK_THEME;
    if (selectedTheme === 'ocean') baseColorTheme = OCEAN_THEME;

    const colors = {
      ...baseColorTheme,
      ...COMMON_COLORS,
    };

    return { colors, fontWeight: FONT_WEIGHT, fontFamily } as Theme;
  }, [selectedTheme]);

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </StyleSheetManager>
  );
};
