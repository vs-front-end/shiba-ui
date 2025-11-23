import styled, { css } from 'styled-components/native';
import type { ColorKeys, ToastType } from '@shiba-ui/shared';

export const Container = styled.View<{
  topOffset?: number;
  leftPadding?: number;
  rightPadding?: number;
}>`
  ${({ topOffset = 16, leftPadding = 20, rightPadding = 20 }) => css`
    position: absolute;
    top: ${topOffset}px;
    left: ${leftPadding}px;
    right: ${rightPadding}px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    width: auto;
    z-index: 9999;
    pointer-events: box-none;
  `}
`;

export const ToastItem = styled.View<{
  variant?: ToastType;
  background?: ColorKeys;
  width?: number;
  height?: number;
  borderRadius?: number;
}>`
  ${({
    theme,
    variant,
    background = 'section',
    width,
    height,
    borderRadius = 4,
  }) => {
    const getBackgroundColor = (): string => {
      if (background && background !== 'section')
        return theme.colors[background];
      if (variant === 'success') return theme.colors.success;
      if (variant === 'error') return theme.colors.error;
      if (variant === 'warning') return theme.colors.warning;
      return theme.colors[background];
    };

    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding: 12px;
      min-height: 40px;
      border-radius: ${borderRadius}px;

      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.1;
      shadow-radius: 4px;
      elevation: 3;

      background: ${getBackgroundColor()};
      width: ${width && width > 0 ? `${width}px` : '100%'};
      height: ${height && height > 0 ? `${height}px` : 'auto'};
    `;
  }}
`;

export const ContentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const IconWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const CloseIcon = styled.View`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
