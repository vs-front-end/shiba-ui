import styled, { css } from 'styled-components';
import { IBadge } from '@shiba-ui/shared';

export const Container = styled.div<IBadge>`
  ${({ theme, background = 'primary', borderRadius = 8, onClick }) => css`
    cursor: ${onClick ? 'pointer' : 'default'};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    width: fit-content;
    height: fit-content;
    padding: 4px 16px;
    column-gap: 8px;

    background: ${theme.colors[background]};
    border-radius: ${`${borderRadius}px`};
  `}
`;
