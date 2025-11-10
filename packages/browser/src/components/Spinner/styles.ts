import styled, { css, keyframes } from 'styled-components';
import type { ISpinner } from '@shiba-ui/shared';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<ISpinner>`
  ${({ theme, size = 20, color = 'primary' }) => css`
    width: ${`${size}px`};
    height: ${`${size}px`};

    border-radius: 50%;
    border-style: solid;
    border-width: ${`${size / 5}px`};
    border-color: transparent;
    border-top-color: ${theme.colors[color]};
    border-right-color: ${theme.colors[color]};

    animation: ${spin} 1s linear infinite;
  `}
`;
