import * as S from './styles';
import React, { useState } from 'react';
import { ThemeProvider } from '@shiba-ui/browser';

import {
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  COMMON_COLORS,
} from '@shiba-ui/shared';

type ThemeData = {
  name: string;
  colors: Record<string, string>;
};

const themes: ThemeData[] = [
  { name: 'Light Theme', colors: LIGHT_THEME },
  { name: 'Dark Theme', colors: DARK_THEME },
  { name: 'Ocean Theme', colors: OCEAN_THEME },
  { name: 'Common Colors', colors: COMMON_COLORS },
];

export function ColorsGallery() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredThemes = themes.filter((theme) => {
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();

    return (
      theme.name.toLowerCase().includes(searchLower) ||
      Object.keys(theme.colors).some((key) =>
        key.toLowerCase().includes(searchLower)
      ) ||
      Object.values(theme.colors).some((value) =>
        value.toLowerCase().includes(searchLower)
      )
    );
  });

  const handleColorClick = (colorName: string, hexCode: string) => {
    const text = `theme.colors.${colorName}`;
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text} (${hexCode})`);
  };

  const handleHexClick = (e: React.MouseEvent, hexCode: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hexCode);
    alert(`Copied hex: ${hexCode}`);
  };

  return (
    <ThemeProvider selectedTheme="light">
      <S.Container>
        <S.SearchInput
          type="text"
          placeholder="Search colors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredThemes.map((theme) => (
          <S.ThemeSection key={theme.name}>
            <S.ThemeTitle>{theme.name}</S.ThemeTitle>

            <S.Grid>
              {Object.entries(theme.colors)
                .filter(([key, value]) => {
                  if (!searchTerm) return true;
                  const searchLower = searchTerm.toLowerCase();
                  return (
                    key.toLowerCase().includes(searchLower) ||
                    value.toLowerCase().includes(searchLower)
                  );
                })
                .map(([key, value]) => (
                  <S.ColorCard
                    key={key}
                    onClick={() => handleColorClick(key, value)}
                  >
                    <S.ColorSwatch $color={value} />

                    <S.ColorInfo>
                      <S.ColorName>{key}</S.ColorName>
                      <S.HexCode onClick={(e) => handleHexClick(e, value)}>
                        {value}
                      </S.HexCode>
                    </S.ColorInfo>
                  </S.ColorCard>
                ))}
            </S.Grid>
          </S.ThemeSection>
        ))}

        {filteredThemes.length === 0 && (
          <S.EmptyState>No colors found matching &quot;{searchTerm}&quot;</S.EmptyState>
        )}
      </S.Container>
    </ThemeProvider>
  );
}
