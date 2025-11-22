import styled, { css } from 'styled-components/native';
import type { IRating, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.View<IRating>`
  ${({ gap = 12 }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${gap}px;
  `}
`;

export const StarContainer = styled.View<{
  readonly?: boolean;
  size?: number;
}>`
  ${({ size = 30 }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${size}px;
  `}
`;

export const StarBase = styled.Text<{ size?: number }>`
  ${({ theme, size = 30 }) => css`
    color: ${theme.colors.highlight};
    font-size: ${size}px;
  `}
`;

export const StarFill = styled.Text<{
  fillPercentage: number;
  background?: ColorKeys;
  size?: number;
}>`
  ${({ theme, fillPercentage, background = 'warning', size = 30 }) => css`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    width: ${fillPercentage}%;
    color: ${theme.colors[background]};
    font-size: ${size}px;
  `}
`;
