import styled, { css } from 'styled-components';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dot = styled.div<{
  positioning: number;
  dotSize: number;
  dotColor?: ColorKeys;
}>`
  ${({ theme, positioning, dotSize, dotColor = 'error' }) => css`
    position: absolute;
    top: ${positioning}px;
    right: ${positioning}px;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: ${dotSize}px;
    height: ${dotSize}px;
    padding: 2px 6px;

    background: ${theme.colors[dotColor]};
    border-radius: ${dotSize / 2}px;
  `}
`;
