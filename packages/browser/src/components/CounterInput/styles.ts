import styled, { css } from 'styled-components';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div<{
  background?: ColorKeys;
  borderRadius?: number;
  width?: number;
  height?: number;
}>`
  ${({ theme, background, borderRadius = 8, width = 160, height = 40 }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    width: ${`${width}px`};
    height: ${`${height}px`};
    background: ${(background && theme.colors[background]) || 'transparent'};
    border-radius: ${`${borderRadius}px`};
  `}
`;

export const Button = styled.button<{
  buttonBackground?: ColorKeys;
  height?: number;
}>`
  ${({ theme, buttonBackground = 'primary', height = 40 }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    padding: 0;
    width: 40px;
    height: ${`${height}px`};
    border-radius: 0;
    position: relative;
    overflow: hidden;
    background: ${theme.colors[buttonBackground]};
    transition: filter 0.3s ease;

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    &:active:not(:disabled) {
      filter: brightness(0.8);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;

export const ValueContainer = styled.div<{
  borderColor?: ColorKeys;
  height?: number;
}>`
  ${({ theme, borderColor = 'highlight', height = 40 }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    height: ${`${height}px`};
    border: 1px solid ${theme.colors[borderColor]};
    transition: border-color 0.3s ease;

    &:focus-within {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<{
  valueColor?: ColorKeys;
}>`
  ${({ theme, valueColor = 'content' }) => css`
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    text-align: center;
    font-size: 16px;
    outline: none;
    padding: 0;
    color: ${theme.colors[valueColor]};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;
