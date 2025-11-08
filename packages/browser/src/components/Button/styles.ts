import styled, { css } from 'styled-components';
import { IButton } from '@shiba-ui/shared';

export const Container = styled.button<IButton>`
  ${({
    theme,
    height = 40,
    width,
    background = 'primary',
    borderColor = 'primary',
    borderRadius = 8,
    borderWidth = 0,
    gap = '12px',
    variant = 'solid',
  }) => {
    const getBorderWidth = () => {
      if (variant === 'text') return '0';

      if (variant === 'outlined') {
        return `${borderWidth > 0 ? borderWidth : 1}px`;
      }

      return `${borderWidth}px`;
    };

    const getBackground = () => {
      return variant === 'solid' ? theme.colors[background] : 'transparent';
    };

    const getHoverStyles = () => {
      if (variant === 'solid') {
        return css`
          filter: brightness(0.9);
          transform: translateY(-1px);
        `;
      }

      if (variant === 'outlined') {
        return css`
          background: ${theme.colors[background]}20;
          transform: translateY(-1px);
        `;
      }

      return css`
        transform: translateY(-1px);
      `;
    };

    const getActiveStyles = () => {
      if (variant === 'solid') {
        return css`
          filter: brightness(0.8);
          transform: translateY(0);
        `;
      }

      if (variant === 'outlined') {
        return css`
          background: ${theme.colors[background]}30;
          transform: translateY(0);
        `;
      }

      return css`
        transform: translateY(0);
      `;
    };

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${gap};

      border-style: solid;
      border-width: ${getBorderWidth()};
      border-color: ${theme.colors[borderColor]};
      border-radius: ${`${borderRadius}px`};

      padding: 8px 16px;
      height: ${`${height}px`};
      width: ${width ? `${width}px` : '100%'};
      background: ${getBackground()};

      cursor: pointer;
      overflow: hidden;
      transition: all 0.2s ease-in-out;

      &:hover:not(:disabled):not([aria-busy='true']) {
        ${getHoverStyles()}
      }

      &:active:not(:disabled):not([aria-busy='true']) {
        ${getActiveStyles()}
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `;
  }}
`;
