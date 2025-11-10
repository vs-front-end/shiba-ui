import styled, { css } from 'styled-components/native';
import type { IProgressBar, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.View<IProgressBar>`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;

  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

export const BarOuter = styled.View<IProgressBar>`
  ${({ theme, height = 8 }) => css`
    flex: 1;

    height: ${`${height}px`};
    margin-bottom: 4px;
    background: ${theme.colors.highlight};
    border-radius: ${`${height / 2}px`};
    overflow: hidden;
    min-width: 0;
  `}
`;

export const BarInner = styled.View<{
  progressValue: number;
  background?: ColorKeys;
  height?: number;
}>`
  ${({ theme, progressValue, background = 'primary', height = 8 }) => css`
    width: ${`${progressValue}%`};
    height: ${`${height}px`};
    background: ${(background && theme.colors[background]) || '#000000'};
    border-radius: ${`${height / 2}px`};
  `}
`;

export const TextContainer = styled.View`
  width: 40px;
  margin-bottom: 4px;
`;
