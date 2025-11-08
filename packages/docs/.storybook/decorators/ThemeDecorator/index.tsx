import * as S from './styles';

import { Decorator } from '@storybook/react';
import { ThemeProvider as BrowserThemeProvider } from '@shiba-ui/browser';
import { ThemeProvider as AppThemeProvider } from '@shiba-ui/app';

type ThemeVariant = 'light' | 'dark' | 'ocean';

export const themeDecorator: Decorator = (Story, context) => {
  const selectedTheme = localStorage.getItem('theme') || 'dark';

  return (
    <BrowserThemeProvider selectedTheme={selectedTheme as ThemeVariant}>
      <AppThemeProvider selectedTheme={selectedTheme as ThemeVariant}>
        <S.Container>
          <Story />
        </S.Container>
      </AppThemeProvider>
    </BrowserThemeProvider>
  );
};
