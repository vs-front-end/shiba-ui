import styled, { css } from 'styled-components/native';
import type { ICheckbox } from '@shiba-ui/shared';

export const Container = styled.View<
  ICheckbox & { isChecked: boolean; isDisabled?: boolean }
>`
  ${({ theme, size = 28, background = 'primary', isChecked, isDisabled }) => {
    const backgroundColor = isChecked
      ? (background && theme.colors[background]) || theme.colors.primary
      : 'transparent';

    const borderColor = isChecked
      ? (background && theme.colors[background]) || theme.colors.primary
      : theme.colors.highlight;

    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      width: ${size}px;
      height: ${size}px;
      background: ${backgroundColor};

      border: 2px solid;
      border-radius: 4px;
      border-color: ${borderColor};

      opacity: ${isDisabled ? 0.5 : 1};
    `;
  }}
`;

export const Tick = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
