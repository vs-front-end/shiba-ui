import styled, { css, keyframes } from 'styled-components';
import type { IRadio } from '@shiba-ui/shared';

const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.button<IRadio>`
  ${({ theme, size = 28, background = 'primary', isSelected }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${`${size}px`};
    height: ${`${size}px`};
    background: none;

    border: 2px solid;
    border-radius: 50%;
    border-color: ${isSelected
      ? theme.colors[background]
      : theme.colors.highlight};

    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;

export const Inner = styled.div<IRadio>`
  ${({ theme, size = 28, background = 'primary', isSelected }) => css`
    width: ${`${size * 0.5}px`};
    height: ${`${size * 0.5}px`};

    border-radius: 50%;
    background: ${isSelected
      ? theme.colors[background]
      : theme.colors.highlight};

    animation: ${scaleIn} 0.15s ease-in-out;
    transform-origin: center;
  `}
`;
