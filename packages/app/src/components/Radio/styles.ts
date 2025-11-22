import styled, { css } from 'styled-components/native';
import type { IRadio } from '@shiba-ui/shared';

export const Container = styled.View<
  IRadio & { isSelected: boolean; isDisabled?: boolean }
>`
  ${({ theme, size = 28, background = 'primary', isSelected, isDisabled }) => {
    const borderColor = isSelected
      ? (background && theme.colors[background]) || theme.colors.primary
      : theme.colors.highlight;

    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      width: ${size}px;
      height: ${size}px;
      background: transparent;

      border: 2px solid;
      border-radius: 50%;
      border-color: ${borderColor};

      opacity: ${isDisabled ? 0.5 : 1};
    `;
  }}
`;

export const Inner = styled.View<IRadio & { isSelected: boolean }>`
  ${({ theme, size = 28, background = 'primary', isSelected }) => {
    const backgroundColor = isSelected
      ? (background && theme.colors[background]) || theme.colors.primary
      : theme.colors.highlight;

    return css`
      width: ${size * 0.5}px;
      height: ${size * 0.5}px;

      border-radius: 50%;
      background: ${backgroundColor};
    `;
  }}
`;
