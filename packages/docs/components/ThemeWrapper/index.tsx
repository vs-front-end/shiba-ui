import * as S from './styles';

import React from 'react';
import { Text } from 'react-native';
import { Decorator } from '@storybook/react';
import { ThemeProvider as BrowserThemeProvider } from '@shiba-ui/browser';
import { ThemeProvider as AppThemeProvider } from '@shiba-ui/app';
import { AppStatusBar } from '../AppStatusBar';

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';

type ThemeVariant = 'light' | 'dark' | 'ocean';

const fonts = {
  'Poppins-Light': Poppins_300Light,
  'Poppins-Regular': Poppins_400Regular,
  'Poppins-Medium': Poppins_500Medium,
  'Poppins-SemiBold': Poppins_600SemiBold,
  'Poppins-Bold': Poppins_700Bold,
  'Poppins-ExtraBold': Poppins_800ExtraBold,
  'Poppins-Black': Poppins_900Black,
};

function WebWrapper({
  Story,
  selectedTheme,
}: {
  Story: React.ComponentType;
  selectedTheme: ThemeVariant;
}) {
  const [fontsLoaded] = useFonts(fonts);

  return (
    <BrowserThemeProvider
      selectedTheme={selectedTheme}
      fontFamily="Poppins, sans-serif"
    >
      <S.Container>
        {!fontsLoaded ? <p>Carregando fontes...</p> : <Story />}
      </S.Container>
    </BrowserThemeProvider>
  );
}

function AppWrapper({
  Story,
  selectedTheme,
}: {
  Story: React.ComponentType;
  selectedTheme: ThemeVariant;
}) {
  const [fontsLoaded] = useFonts(fonts);

  return (
    <AppThemeProvider
      selectedTheme={selectedTheme}
      fontFamily="Poppins-Regular"
    >
      <S.NativeContainer>
        <AppStatusBar />

        <S.ContentWrapper>
          {!fontsLoaded ? <Text>Carregando fontes...</Text> : <Story />}
        </S.ContentWrapper>
      </S.NativeContainer>
    </AppThemeProvider>
  );
}

export const themeWrapper: Decorator = (Story, context) => {
  const globals = context.globals as { theme?: ThemeVariant };
  const localStorageTheme = localStorage.getItem('theme') as ThemeVariant;
  const selectedTheme = globals.theme || localStorageTheme || 'dark';

  const isApp = context.title?.startsWith('APP -') ?? false;
  const isBrowser = context.title?.startsWith('WEB -') ?? false;

  if (isApp) {
    return <AppWrapper Story={Story} selectedTheme={selectedTheme} />;
  }

  if (isBrowser) {
    return <WebWrapper Story={Story} selectedTheme={selectedTheme} />;
  }

  return <Story />;
};
