import styled, { css } from 'styled-components';
import type { IBadge } from '@shiba-ui/shared';

export const Container = styled.div<IBadge & { isInteractive?: boolean }>`
  ${({ theme, background = 'primary', borderRadius = 8, isInteractive }) => css`
    cursor: ${isInteractive ? 'pointer' : 'default'};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    width: fit-content;
    height: fit-content;
    padding: 4px 16px;
    column-gap: 8px;

    background: ${theme.colors[background]};
    border-radius: ${borderRadius}px;
    font-family: ${theme.fontFamily};

    ${isInteractive &&
    css`
      &:focus-visible {
        outline: 2px solid ${theme.colors.primary};
        outline-offset: 2px;
      }
    `}
  `}
`;
