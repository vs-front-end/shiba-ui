import styled, { css } from 'styled-components/native';
import type { IOtpInput } from '@shiba-ui/shared';
import { TextInput as RNTextInput } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputsContainer = styled.View<{ gap?: number }>`
  ${({ gap = 8 }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: ${`${gap}px`};
  `}
`;

export const Input = styled(RNTextInput)<IOtpInput & { isDisabled?: boolean }>`
  ${({
    theme,
    background,
    borderColor = 'highlight',
    borderRadius = 4,
    borderWidth = 1,
    textColor = 'content',
    height = 40,
    width = 40,
    isDisabled,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 8px;
    border-style: solid;

    width: ${`${width}px`};
    height: ${`${height}px`};
    background: ${(background && theme.colors[background]) || 'transparent'};
    border-color: ${theme.colors[borderColor]};
    border-width: ${`${borderWidth}px`};
    border-radius: ${`${borderRadius}px`};
    color: ${theme.colors[textColor]};
    font-size: 16px;
    font-family: ${theme.fontFamily};

    outline-style: none;
    opacity: ${isDisabled ? 0.5 : 1};
  `}
`;
