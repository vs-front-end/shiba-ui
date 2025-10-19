import React, { useCallback, useEffect } from 'react';

import {
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  COMMON_COLORS,
  ThemeVariant,
} from '@shiba-ui/shared';

interface ThemeProviderProps {
  children: React.ReactNode;
  selectedTheme?: ThemeVariant;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  selectedTheme = 'light',
}) => {
  const applyTheme = useCallback(() => {
    let baseColorTheme = LIGHT_THEME;

    if (selectedTheme === 'dark') baseColorTheme = DARK_THEME;
    if (selectedTheme === 'ocean') baseColorTheme = OCEAN_THEME;

    const finalTheme = {
      ...baseColorTheme,
      ...COMMON_COLORS,
    };

    const root = document.documentElement;

    Object.entries(finalTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [selectedTheme]);

  useEffect(() => applyTheme(), [applyTheme]);

  return <>{children}</>;
};
