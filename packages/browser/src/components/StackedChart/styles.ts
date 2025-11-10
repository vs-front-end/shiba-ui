import styled, { css } from 'styled-components';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div<{
  width?: number;
}>`
  ${({ width }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: ${width && width > 0 ? `${width}px` : '100%'};
  `}
`;

export const ChartContainer = styled.div<{
  height?: number;
}>`
  ${({ height = 12 }) => css`
    display: flex;
    width: 100%;
    height: ${`${height}px`};
  `}
`;

export const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Segment = styled.div<{
  width: number;
  background: ColorKeys;
  borderRadius: number;
  isFirst: boolean;
  isLast: boolean;
  isActive: boolean;
}>`
  ${({
    theme,
    width,
    background,
    borderRadius,
    isFirst,
    isLast,
    isActive,
  }) => css`
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    height: 100%;
    width: ${`${width}%`};
    background: ${theme.colors[background]};
    border-radius: ${isFirst
      ? `${borderRadius}px 0 0 ${borderRadius}px`
      : isLast
        ? `0 ${borderRadius}px ${borderRadius}px 0`
        : '0'};
    filter: ${isActive ? 'brightness(1.1)' : 'none'};

    &:hover {
      filter: brightness(1.05);
    }

    &:active {
      filter: brightness(0.95);
    }
  `}
`;
