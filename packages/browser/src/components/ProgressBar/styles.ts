import styled, { css } from 'styled-components';
import { IProgressBar, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div<IProgressBar>`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;

  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

export const BarOuter = styled.div<IProgressBar>`
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

export const BarInner = styled.div<{
  progressValue: number;
  background?: ColorKeys;
  height?: number;
}>`
  ${({ theme, progressValue, background = 'primary', height = 8 }) => css`
    width: ${`${progressValue}%`};
    height: ${`${height}px`};
    background: ${theme.colors[background]};
    border-radius: ${`${height / 2}px`};

    transition: width 0.3s ease-in-out;
  `}
`;

export const TextContainer = styled.div`
  width: 40px;
  margin-bottom: 4px;
`;
