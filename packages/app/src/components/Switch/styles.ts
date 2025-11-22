import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';
import type { ISwitch } from '@shiba-ui/shared';

export const Container = styled.View<
  ISwitch & { isChecked: boolean; isDisabled?: boolean }
>`
  ${({ theme, size = 28, background = 'primary', isChecked, isDisabled }) => {
    const backgroundColor = isChecked
      ? (background && theme.colors[background]) || theme.colors.primary
      : theme.colors.highlight;

    return css`
      position: relative;
      display: flex;
      align-items: center;

      height: ${size}px;
      width: ${size * 2}px;
      border-radius: ${size / 2}px;
      background: ${backgroundColor};

      opacity: ${isDisabled ? 0.5 : 1};
    `;
  }}
`;

export const Circle = styled(Animated.View)<{ size?: number }>`
  ${({ size = 28 }) => css`
    position: absolute;
    width: ${size - 8}px;
    height: ${size - 8}px;
    border-radius: ${(size - 8) / 2}px;
    background: white;
    left: 4px;
    top: 4px;
  `}
`;
