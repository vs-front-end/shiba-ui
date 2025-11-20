import styled, { css } from 'styled-components/native';
import type { ColorKeys } from '@shiba-ui/shared';
import { TextInput as RNTextInput } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputContainer = styled.View<{
  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderRadius?: number;
  borderWidth?: number;
  height?: number;
  width?: number;
  isDisabled?: boolean;
}>`
  ${({
    theme,
    background,
    borderColor = 'highlight',
    borderRadius = 4,
    borderWidth = 1,
    height = 40,
    width,
    isDisabled,
  }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    width: ${width ? `${width}px` : '100%'};
    height: ${`${height}px`};
    padding: 0px 12px;
    background: ${(background && theme.colors[background]) || 'transparent'};
    border-style: solid;
    border-color: ${theme.colors[borderColor]};
    border-width: ${`${borderWidth}px`};
    border-radius: ${`${borderRadius}px`};

    opacity: ${isDisabled ? 0.5 : 1};
  `}
`;

export const Input = styled(RNTextInput)<{ textColor?: ColorKeys }>`
  ${({ theme, textColor = 'content' }) => css`
    flex: 1;
    min-width: 0;
    color: ${theme.colors[textColor]};
    font-size: 14px;
    font-family: ${theme.fontFamily};
    border-width: 0;
    outline-style: none;
  `}
`;

export const IconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
