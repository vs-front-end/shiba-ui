import styled, { css, keyframes } from 'styled-components';
import { ICheckbox } from '@shiba-ui/shared';

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

export const Container = styled.button<ICheckbox>`
  ${({ theme, size = 28, background = 'primary', isChecked }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${`${size}px`};
    height: ${`${size}px`};
    background: ${isChecked ? theme.colors[background] : 'transparent'};

    border: 2px solid;
    border-radius: 4px;
    border-color: ${isChecked
      ? theme.colors[background]
      : theme.colors.highlight};

    cursor: pointer;
    padding: 0;
    transition: all 0.2s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;

export const Tick = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  animation: ${scaleIn} 0.15s ease-in-out;
  transform-origin: center;
`;
