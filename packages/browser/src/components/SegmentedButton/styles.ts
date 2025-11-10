import styled, { css } from 'styled-components';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div<{
  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderWidth?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
}>`
  ${({
    theme,
    background = 'section',
    borderColor = 'section',
    borderWidth = 1,
    borderRadius = 8,
    width,
    height,
  }) => css`
    display: flex;
    background: ${(background && theme.colors[background]) ||
    theme.colors.section};
    border-radius: ${`${borderRadius}px`};
    padding: 4px;
    gap: 8px;
    border: ${`${borderWidth}px`} solid ${theme.colors[borderColor]};

    width: ${width && width > 0 ? `${width}px` : '100%'};
    height: ${height && height > 0 ? `${height}px` : 'fit-content'};
  `}
`;

export const Option = styled.button<{
  isActive?: boolean;
  activeBackground?: ColorKeys;
  background?: ColorKeys;
  borderRadius?: number;
}>`
  ${({
    theme,
    isActive,
    activeBackground = 'primary',
    borderRadius = 8,
  }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 8px;
    border: none;
    padding: 8px 16px;
    transition: all 0.2s ease;
    background: ${isActive
      ? (activeBackground && theme.colors[activeBackground]) ||
        theme.colors.primary
      : 'transparent'};
    border-radius: ${`${borderRadius}px`};

    &:hover:not(:disabled) {
      filter: brightness(0.85);
    }
  `}
`;
