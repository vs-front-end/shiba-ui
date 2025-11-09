import styled, { css } from 'styled-components';
import { IOtpInput, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputsContainer = styled.div<{ gap?: number }>`
  ${({ gap = 8 }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: ${`${gap}px`};
  `}
`;

export const Input = styled.input<IOtpInput>`
  ${({
    theme,
    background,
    borderColor = 'highlight',
    borderRadius = 4,
    borderWidth = 1,
    textColor = 'content',
    height = 40,
    width = 40,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 8px;
    font-family: ${theme.fontFamily};
    border-style: solid;

    width: ${`${width}px`};
    height: ${`${height}px`};
    background: ${(background && theme.colors[background]) || 'transparent'};
    border-color: ${theme.colors[borderColor]};
    border-width: ${`${borderWidth}px`};
    border-radius: ${`${borderRadius}px`};
    color: ${theme.colors[textColor]};

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;
