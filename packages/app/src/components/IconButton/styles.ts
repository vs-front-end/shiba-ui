import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import type { ColorKeys } from '@shiba-ui/shared';

export const PressableWrapper = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})<{ size?: number }>`
  ${({ size = 36 }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
`;

export const Container = styled.View<{
  size?: number;
  background?: ColorKeys;
  borderRadius?: number;
  borderColor?: ColorKeys;
  borderWidth?: number;
  isDisabled?: boolean;
}>`
  ${({
    theme,
    size = 36,
    background = 'primary',
    borderColor,
    borderRadius = 8,
    borderWidth = 0,
    isDisabled,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${size}px;
    height: ${size}px;

    border-style: solid;
    border-width: ${borderWidth}px;
    border-color: ${borderColor ? theme.colors[borderColor] : 'transparent'};
    border-radius: ${borderRadius}px;

    background: ${theme.colors[background]};

    overflow: hidden;
    opacity: ${isDisabled ? 0.5 : 1};
  `}
`;
