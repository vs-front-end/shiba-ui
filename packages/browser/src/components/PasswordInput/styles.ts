import styled, { css } from 'styled-components';
import type { IPasswordInput, ColorKeys } from '@shiba-ui/shared';

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

export const InputContainer = styled.div<IPasswordInput>`
  ${({
    theme,
    background,
    borderColor = 'highlight',
    borderRadius = 4,
    borderWidth = 1,
    height,
    width,
  }) => css`
    position: relative;
    display: flex;
    align-items: center;

    width: ${width ? `${width}px` : '100%'};
    height: ${height ? `${height}px` : '40px'};
    background: ${background
      ? theme.colors[background as ColorKeys]
      : 'transparent'};
    border-style: solid;
    border-color: ${theme.colors[borderColor]};
    border-width: ${borderWidth}px;
    border-radius: ${borderRadius}px;
  `}
`;

export const Input = styled.input<IPasswordInput>`
  ${({ theme, textColor = 'content' }) => css`
    flex: 1;
    min-width: 0;
    height: 100%;
    padding: 8px 16px;
    padding-right: 40px;
    font-family: ${theme.fontFamily};
    border: none;
    background: transparent;
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

export const IconContainer = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
