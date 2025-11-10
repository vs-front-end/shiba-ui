import styled, { css } from 'styled-components/native';
import type { ColorKeys } from '@shiba-ui/shared';
import { TextInput as RNTextInput } from 'react-native';

export const Container = styled.View<{
  background?: ColorKeys;
  borderRadius?: number;
  width?: number;
  height?: number;
}>`
  ${({ theme, background, borderRadius = 8, width = 160, height = 40 }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    width: ${`${width}px`};
    height: ${`${height}px`};
    background: ${(background && theme.colors[background]) || 'transparent'};
    border-radius: ${`${borderRadius}px`};
  `}
`;

export const Button = styled.View<{
  buttonBackground?: ColorKeys;
  height?: number;
  isDisabled?: boolean;
}>`
  ${({ theme, buttonBackground = 'primary', height = 40, isDisabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: ${`${height}px`};
    border-radius: 0;
    position: relative;
    overflow: hidden;
    background: ${(buttonBackground && theme.colors[buttonBackground]) ||
    'transparent'};
    opacity: ${isDisabled ? 0.5 : 1};
  `}
`;

export const ValueContainer = styled.View<{
  borderColor?: ColorKeys;
  height?: number;
}>`
  ${({ theme, borderColor = 'highlight', height = 40 }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: ${`${height}px`};
    border: 1px solid ${theme.colors[borderColor]};
  `}
`;

export const Input = styled(RNTextInput)<{
  valueColor?: ColorKeys;
}>`
  ${({ theme, valueColor = 'content' }) => css`
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    text-align: center;
    font-size: 16px;
    padding: 0;
    color: ${theme.colors[valueColor]};
    border-width: 0;
    outline-style: none;
  `}
`;
