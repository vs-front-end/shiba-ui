import styled, { css } from 'styled-components';
import { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div<{
  width?: number;
  height?: number;
}>`
  ${({ width, height }) => css`
    display: flex;
    width: ${width && width > 0 ? `${width}px` : '100%'};
    height: ${height && height > 0 ? `${height}px` : 'fit-content'};
  `}
`;

export const Option = styled.button<{
  isActive?: boolean;
  activeColor?: ColorKeys;
  borderColor?: ColorKeys;
}>`
  ${({
    theme,
    isActive,
    activeColor = 'primary',
    borderColor = 'highlight',
  }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 8px;

    border: none;
    background: transparent;
    padding: 12px 16px 8px 16px;
    border-bottom: 2px solid
      ${isActive ? theme.colors[activeColor] : theme.colors[borderColor]};

    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      filter: brightness(0.85);
    }
  `}
`;
