import * as S from './styles';
import type { ISpinner } from '@shiba-ui/shared';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

export const Spinner = ({
  size = 20,
  color = 'primary',
  isHidden,
  ...props
}: ISpinner) => {
  const { colors } = useTheme();

  if (isHidden) return null;

  const baseSize = 20;
  const scale = size / baseSize;

  return (
    <S.Container
      accessibilityRole="progressbar"
      accessibilityLabel="Loading"
      accessibilityState={{ busy: true }}
      data-testid="spinner"
      {...props}
    >
      <S.SpinnerWrapper style={{ transform: [{ scale }] }}>
        <ActivityIndicator size="small" color={colors[color]} />
      </S.SpinnerWrapper>
    </S.Container>
  );
};
