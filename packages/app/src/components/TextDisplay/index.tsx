import * as S from './styles';
import type { ITextDisplay, FontKeys } from '@shiba-ui/shared';
import { useMemo } from 'react';
import { useTheme } from 'styled-components/native';

const getFontFamilyByWeight = (
  baseFontFamily: string,
  fontWeight: FontKeys = 'regular'
): string => {
  if (baseFontFamily === 'System') return 'System';

  const weightMap: Record<FontKeys, string> = {
    light: 'Light',
    regular: 'Regular',
    medium: 'Medium',
    semibold: 'SemiBold',
    bold: 'Bold',
    extrabold: 'ExtraBold',
    black: 'Black',
  };

  const weightSuffix = weightMap[fontWeight];

  const match = baseFontFamily.match(
    /^(.+?)-(Light|Regular|Medium|SemiBold|Bold|ExtraBold|Black)$/
  );

  if (match) {
    return `${match[1]}-${weightSuffix}`;
  }

  return `${baseFontFamily}-${weightSuffix}`;
};

export const TextDisplay = ({
  text,
  isHidden,
  letterSpacing,
  fontWeight = 'regular',
  ...props
}: ITextDisplay) => {
  const theme = useTheme();

  const fontFamily = useMemo(() => {
    return getFontFamilyByWeight(theme.fontFamily, fontWeight);
  }, [theme.fontFamily, fontWeight]);

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="text-display"
      letterSpacing={letterSpacing}
      style={{ fontFamily, letterSpacing }}
      {...props}
    >
      {text || '-'}
    </S.Container>
  );
};
