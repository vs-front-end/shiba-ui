import styled, { css } from 'styled-components/native';
import { ITextArea, ColorKeys } from '@shiba-ui/shared';
import { TextInput as RNTextInput } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const TextArea = styled(RNTextInput)<{
  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderRadius?: number;
  borderWidth?: number;
  textColor?: ColorKeys;
  height?: number;
  width?: number;
}>`
  ${({
    theme,
    background,
    borderColor = 'highlight',
    borderRadius = 4,
    borderWidth = 1,
    textColor = 'content',
    height = 100,
    width,
  }) => css`
    width: ${width ? `${width}px` : '100%'};
    min-height: ${`${height}px`};
    padding: 8px 16px;
    font-size: 16px;
    border-width: 0;
    outline-style: none;
    border-style: solid;

    background: ${(background && theme.colors[background]) || 'transparent'};
    border-color: ${theme.colors[borderColor]};
    border-width: ${`${borderWidth}px`};
    border-radius: ${`${borderRadius}px`};
    color: ${theme.colors[textColor]};
  `}
`;
