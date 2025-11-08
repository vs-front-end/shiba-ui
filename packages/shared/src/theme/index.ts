import { FONT_WEIGHT } from '../constants/fontWeight';
import { LIGHT_THEME, COMMON_COLORS } from '../constants/colors';

export type ThemeVariant = 'light' | 'dark' | 'ocean';

export type ColorKeys = keyof typeof COMMON_COLORS | keyof typeof LIGHT_THEME;
export type FontKeys = keyof typeof FONT_WEIGHT;

export interface Theme {
  colors: typeof COMMON_COLORS & typeof LIGHT_THEME;
  fontWeight: typeof FONT_WEIGHT;
  fontFamily: string;
}

export interface ThemeContextType {
  theme: Theme;
}
