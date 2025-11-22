import styled, { css } from 'styled-components';
import type { IBanner } from '@shiba-ui/shared';

export const Container = styled.div<IBanner>`
  ${({ theme, background, borderColor, width, height }) => css`
    position: relative;

    display: flex;
    align-items: center;

    padding: 16px;
    border-radius: 8px;
    border: 1px solid ${theme.colors[borderColor || 'highlight']};

    width: ${width ? `${width}px` : '100%'};
    height: ${height ? `${height}px` : 'fit-content'};
    background: ${background ? theme.colors[background] : 'transparent'};
  `}
`;

export const Content = styled.div`
  flex: 1;
`;

export const CloseButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;
  border: none;
  background: transparent;
  margin-left: 8px;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;
