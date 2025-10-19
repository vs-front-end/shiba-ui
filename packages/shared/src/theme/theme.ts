import { LIGHT_THEME, DARK_THEME, OCEAN_THEME, COMMON_COLORS } from '../constants/colors';

export type ThemeVariant = 'light' | 'dark' | 'ocean';

export interface Theme {
  colors: typeof COMMON_COLORS & typeof LIGHT_THEME;
  variant: ThemeVariant;
}

export interface ThemeContextType {
  theme: Theme;
}
