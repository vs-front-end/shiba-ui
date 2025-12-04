import styled, { css } from 'styled-components';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.button<{
  size?: number;
  background?: ColorKeys;
  borderRadius?: number;
  borderColor?: ColorKeys;
  borderWidth?: number;
  isDisabled?: boolean;
}>`
  ${({
    theme,
    size = 36,
    background = 'primary',
    borderColor,
    borderRadius = 8,
    borderWidth = 0,
    isDisabled,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${size}px;
    height: ${size}px;

    border-style: solid;
    border-width: ${borderWidth}px;
    border-color: ${borderColor ? theme.colors[borderColor] : 'transparent'};
    border-radius: ${borderRadius}px;

    background: ${theme.colors[background]};

    overflow: hidden;
    opacity: ${isDisabled ? 0.5 : 1};
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

    &:hover {
      opacity: ${isDisabled ? 0.5 : 0.8};
    }

    &:active {
      opacity: ${isDisabled ? 0.5 : 0.9};
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }
  `}
`;

