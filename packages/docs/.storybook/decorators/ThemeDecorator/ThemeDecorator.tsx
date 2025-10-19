import { Decorator } from '@storybook/react';
import { ThemeProvider as BrowserThemeProvider } from '@shiba-ui/browser';
import { ThemeProvider as AppThemeProvider } from '@shiba-ui/app';
import styles from './styles.module.css';

export const themeDecorator: Decorator = (Story) => {
  const selectedTheme = localStorage.getItem('theme') || 'ocean';

  return (
    <BrowserThemeProvider selectedTheme={selectedTheme as 'light' | 'dark' | 'ocean'}>
      <AppThemeProvider selectedTheme={selectedTheme as 'light' | 'dark' | 'ocean'}>
        <div className={styles.container}>
          <Story />
        </div>
      </AppThemeProvider>
    </BrowserThemeProvider>
  );
};
