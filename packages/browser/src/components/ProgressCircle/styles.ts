import styled, { css } from 'styled-components';
import type { IProgressCircle, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div<IProgressCircle>`
  ${({ size = 60 }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${size}px;
    width: ${size}px;
  `}
`;

export const Svg = styled.svg`
  position: absolute;
  transform: rotate(-90deg);
`;

export const CircleBase = styled.circle`
  ${({ theme }) => css`
    fill: none;
    stroke: ${theme.colors.highlight};
  `}
`;

export const CircleRange = styled.circle<{ background?: ColorKeys }>`
  ${({ theme, background = 'primary' }) => css`
    fill: none;
    stroke: ${theme.colors[background]};
    transition: stroke-dashoffset 0.3s ease-in-out;
  `}
`;

export const ProgressValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

