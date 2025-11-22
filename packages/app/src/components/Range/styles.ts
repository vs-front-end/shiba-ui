import styled, { css } from 'styled-components/native';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.View<{ width?: number; height?: number }>`
  ${({ width, height = 8 }) => css`
    position: relative;
    width: ${width ? `${width}px` : '100%'};
    height: ${height * 1.5}px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Track = styled.View<{
  background?: ColorKeys;
  height?: number;
  width?: number;
}>`
  ${({ theme, height = 8, width }) => css`
    position: absolute;
    width: ${width ? `${width}px` : '100%'};
    height: ${height}px;
    background: ${theme.colors.highlight};
    border-radius: ${height / 2}px;
  `}
`;

export const Fill = styled.View<{
  background?: ColorKeys;
  height?: number;
  percentage: number;
}>`
  ${({ theme, background = 'primary', height = 8, percentage }) => {
    const backgroundColor =
      (background && theme.colors[background]) || theme.colors.primary;

    return css`
      position: absolute;
      left: 0;
      width: ${percentage}%;
      height: ${height}px;
      background: ${backgroundColor};
      border-radius: ${height / 2}px;
    `;
  }}
`;

export const Thumb = styled.View<{
  background?: ColorKeys;
  height?: number;
  percentage: number;
}>`
  ${({ theme, background = 'primary', height = 8, percentage }) => {
    const backgroundColor =
      (background && theme.colors[background]) || theme.colors.primary;

    return css`
      position: absolute;
      left: ${percentage}%;
      margin-left: ${-(height * 1.5) / 2}px;
      width: ${height * 1.5}px;
      height: ${height * 1.5}px;
      background: ${backgroundColor};
      border-radius: 50%;
    `;
  }}
`;
