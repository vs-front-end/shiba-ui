import styled, { css, keyframes } from 'styled-components';
import type { ColorKeys, ToastType } from '@shiba-ui/shared';

const slideIn = keyframes`
  from {
    transform: translateX(calc(100% + 16px));
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(calc(100% + 16px));
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  z-index: 9999;
  max-width: calc(100vw - 32px);
  pointer-events: none;
  overflow-x: hidden;
  overflow-y: visible;
`;

export const ToastItem = styled.div<{
  isExiting?: boolean;
  variant?: ToastType;
  background?: ColorKeys;
  width?: number;
  height?: number;
  borderRadius?: number;
}>`
  ${({
    theme,
    isExiting,
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
      align-items: center;
      justify-content: space-between;
      column-gap: 12px;
      padding: 12px;
      min-height: 40px;
      min-width: 280px;
      max-width: calc(100vw - 32px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background: ${getBackgroundColor()};
      border-radius: ${borderRadius}px;
      animation: ${isExiting ? slideOut : slideIn} 0.3s ease-out forwards;
      pointer-events: auto;

      width: ${width && width > 0 ? `${width}px` : 'auto'};
      height: ${height && height > 0 ? `${height}px` : 'auto'};
    `;
  }}
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const CloseIcon = styled.div`
  margin-left: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;
