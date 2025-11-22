import styled, { css } from 'styled-components/native';
import type { ISkeleton } from '@shiba-ui/shared';

export const Container = styled.View<ISkeleton>`
  ${({
    theme,
    background = 'highlight',
    borderRadius = 8,
    width = 50,
    height = 50,
    isFullSize = false,
  }) => css`
    border-radius: ${borderRadius}px;
    background: ${(background && theme.colors[background]) ||
    theme.colors.highlight};

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
