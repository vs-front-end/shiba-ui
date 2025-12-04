import styled, { css } from 'styled-components';
import type { ITextInput, ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const Input = styled.input<ITextInput>`
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
    height: ${height ? `${height}px` : '40px'};
    padding: 8px 16px;
    font-family: ${theme.fontFamily};
    border-style: solid;

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

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;
