import styled, { css, keyframes } from 'styled-components';
import type { ColorKeys, ISkeleton } from '@shiba-ui/shared';

const blink = keyframes`
  0% {
    opacity: 0.45;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.45;
  }
`;

export const Container = styled.div<ISkeleton>`
  ${({
    theme,
    background = 'highlight',
    borderRadius = 8,
    width = 50,
    height = 50,
    isFullSize = false,
  }) => css`
    border-radius: ${borderRadius}px;
    background: ${theme.colors[background as ColorKeys]};
    animation: ${blink} 1.5s infinite;

    ${isFullSize
      ? css`
          width: 100%;
          height: 100%;
        `
      : css`
          width: ${width}px;
          height: ${height}px;
        `}
  `}
`;
