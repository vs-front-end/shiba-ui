import styled, { css } from 'styled-components/native';
import { IBanner } from '@shiba-ui/shared';

export const Container = styled.View<IBanner>`
  ${({ theme, background, borderColor, width, height }) => css`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 16px;
    border-radius: 8px;
    border: 1px solid ${theme.colors[borderColor || 'highlight']};

    width: ${width ? `${width}px` : '100%'};
    height: ${height ? `${height}px` : 'auto'};
    background: ${(background && theme.colors[background]) || 'transparent'};
  `}
`;

export const Content = styled.View`
  flex: 1;
`;

export const CloseButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;
  background: transparent;
  margin-left: 8px;
`;
