import styled, { css } from 'styled-components/native';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.View<{
  positioning: number;
  dotSize: number;
  dotColor?: ColorKeys;
}>`
  ${({ theme, positioning, dotSize, dotColor = 'error' }) => css`
    position: absolute;
    top: ${`${positioning}px`};
    right: ${`${positioning}px`};

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: ${`${dotSize}px`};
    height: ${`${dotSize}px`};
    padding: 2px 6px;

    border-radius: ${`${dotSize / 2}px`};
    background: ${(dotColor && theme.colors[dotColor]) || 'transparent'};
  `}
`;
