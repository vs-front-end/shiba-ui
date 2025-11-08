import styled, { css } from 'styled-components';
import { IRating, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div<IRating>`
  ${({ gap = 12 }) => css`
    display: flex;
    align-items: center;
    gap: ${`${gap}px`};
  `}
`;

export const StarContainer = styled.div<{
  readonly?: boolean;
  size?: number;
}>`
  ${({ readonly, size = 30 }) => css`
    position: relative;
    display: inline-block;

    font-size: ${`${size}px`};
    cursor: ${readonly ? 'default' : 'pointer'};
  `}
`;

export const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: pointer;
`;

export const StarBase = styled.div<{ size?: number }>`
  ${({ theme, size = 30 }) => css`
    color: ${theme.colors.highlight};
    font-size: ${`${size}px`};
  `}
`;

export const StarFill = styled.div<{
  fillPercentage: number;
  background?: ColorKeys;
  size?: number;
}>`
  ${({ theme, fillPercentage, background = 'warning', size = 30 }) => css`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    width: ${`${fillPercentage}%`};
    color: ${theme.colors[background]};
    font-size: ${`${size}px`};
  `}
`;
