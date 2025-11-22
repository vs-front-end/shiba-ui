import styled, { css } from 'styled-components';
import type { ITextArea, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const TextArea = styled.textarea<ITextArea>`
  ${({
    theme,
    background,
    borderColor = 'highlight',
    borderRadius = 4,
    borderWidth = 1,
    textColor = 'content',
    height,
    width,
  }) => css`
    width: ${width ? `${width}px` : '100%'};
    min-height: ${height ? `${height}px` : '100px'};
    padding: 8px 16px;
    font-family: ${theme.fontFamily};
    border-style: solid;
    overflow: hidden;
    resize: vertical;

    background: ${background
      ? theme.colors[background as ColorKeys]
      : 'transparent'};
    border-color: ${theme.colors[borderColor]};
    border-width: ${borderWidth}px;
    border-radius: ${borderRadius}px;
    color: ${theme.colors[textColor]};

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;
