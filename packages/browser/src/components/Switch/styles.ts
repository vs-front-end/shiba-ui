import styled, { css } from 'styled-components';
import { ISwitch } from '@shiba-ui/shared';

export const Container = styled.button<ISwitch>`
  ${({
    theme,
    size = 28,
    background = 'primary',
    isChecked,
    isDisabled,
  }) => css`
    position: relative;
    display: flex;
    align-items: center;

    height: ${`${size}px`};
    width: ${`${size * 2}px`};
    border-radius: ${`${size / 2}px`};
    border: none;

    background: ${isChecked
      ? theme.colors[background]
      : theme.colors.highlight};

    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
    opacity: ${isDisabled ? 0.5 : 1};
    transition: all 0.3s ease-in-out;
  `}
`;

export const Circle = styled.div<ISwitch>`
  ${({ isChecked }) => css`
    position: absolute;
    width: calc(50% - 6px);
    aspect-ratio: 1;
    border-radius: 50%;
    background: white;

    left: ${isChecked ? 'calc(100% - calc(50% - 4px))' : '4px'};
    transition: all 0.3s ease-in-out;
  `}
`;
