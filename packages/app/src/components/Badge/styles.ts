import styled, { css } from 'styled-components/native';
import type { IBadge } from '@shiba-ui/shared';

export const Container = styled.View<IBadge>`
  ${({ theme, background = 'primary', borderRadius = 8 }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: fit-content;
    height: fit-content;
    padding: 4px 16px;
    column-gap: 8px;

    border-radius: ${borderRadius}px;
    background: ${(background && theme.colors[background]) || 'transparent'};
  `}
`;
