import styled, { css } from 'styled-components';
import { IRange, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.input<IRange & { percentage: number }>`
  ${({
    theme,
    background = 'primary',
    height = 8,
    width,
    percentage,
  }) => css`
    width: ${width ? `${width}px` : '100%'};
    height: ${`${height}px`};
    -webkit-appearance: none;
    appearance: none;
    background: linear-gradient(
      to right,
      ${theme.colors[background as ColorKeys]} ${percentage}%,
      ${theme.colors.highlight} ${percentage}%
    );
    border-radius: ${`${height / 2}px`};
    outline: none;
    cursor: pointer;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: ${`${height * 1.5}px`};
      height: ${`${height * 1.5}px`};
      background: ${theme.colors[background as ColorKeys]};
      border-radius: 50%;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: ${`${height * 1.5}px`};
      height: ${`${height * 1.5}px`};
      background: ${theme.colors[background as ColorKeys]};
      border-radius: 50%;
      cursor: pointer;
      border: none;
    }

    &:focus {
      outline: none;
    }
  `}
`;

