import styled, { css } from 'styled-components/native';
import type { IProgressCircle, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.View<IProgressCircle>`
  ${({ size = 60 }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${`${size}px`};
    width: ${`${size}px`};
  `}
`;

export const CircleBase = styled.View<{ size?: number }>`
  ${({ theme, size = 60 }) => css`
    position: absolute;
    width: ${`${size}px`};
    height: ${`${size}px`};
    border-radius: ${`${size / 2}px`};
    border: 8px solid ${theme.colors.highlight};
  `}
`;

export const CircleFill = styled.View<{
  size?: number;
  progressValue: number;
  background?: ColorKeys;
}>`
  ${({ theme, size = 60, progressValue, background = 'primary' }) => {
    const progressColor =
      (background && theme.colors[background]) || theme.colors.primary;
    const progress = progressValue / 100;

    return css`
      position: absolute;
      width: ${`${size}px`};
      height: ${`${size}px`};
      border-radius: ${`${size / 2}px`};
      border: 8px solid transparent;
      border-top-color: ${progress >= 0.25 ? progressColor : 'transparent'};
      border-right-color: ${progress >= 0.5 ? progressColor : 'transparent'};
      border-bottom-color: ${progress >= 0.75 ? progressColor : 'transparent'};
      border-left-color: ${progress >= 1 ? progressColor : 'transparent'};
      transform: rotate(-90deg);
    `;
  }}
`;

export const ProgressValue = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
