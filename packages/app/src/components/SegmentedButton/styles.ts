import styled, { css } from 'styled-components/native';
import type { ColorKeys } from '@shiba-ui/shared';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View<{
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
    flex-direction: row;
    background: ${(background && theme.colors[background]) ||
    theme.colors.section};
    border-radius: ${borderRadius}px;
    padding: 4px;
    gap: 8px;
    border: ${borderWidth}px solid ${theme.colors[borderColor]};

    width: ${width && width > 0 ? `${width}px` : '100%'};
    height: ${height && height > 0 ? `${height}px` : 'auto'};
  `}
`;

export const Option = styled.View<{
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
    flex: 1;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    background: ${isActive
      ? (activeBackground && theme.colors[activeBackground]) ||
        theme.colors.primary
      : 'transparent'};
    border-radius: ${borderRadius}px;
    overflow: hidden;
  `}
`;

export const OptionTouchable = styled(TouchableOpacity)<{
  borderRadius?: number;
}>`
  ${({ borderRadius = 8 }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: ${borderRadius}px;
  `}
`;
