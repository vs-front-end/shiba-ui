import React, { createContext, useContext, useMemo } from 'react';

import {
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  COMMON_COLORS,
  Theme,
  ThemeContextType,
  ThemeVariant,
} from '@shiba-ui/shared';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  selectedTheme?: ThemeVariant;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  selectedTheme = 'light',
}) => {
  const theme = useMemo(() => {
    let baseColorTheme = LIGHT_THEME;

    if (selectedTheme === 'dark') baseColorTheme = DARK_THEME;
    if (selectedTheme === 'ocean') baseColorTheme = OCEAN_THEME;

    const colors = {
      ...baseColorTheme,
      ...COMMON_COLORS,
    };

    return { colors, variant: selectedTheme } as Theme;
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
