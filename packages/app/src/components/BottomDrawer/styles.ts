import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';
import type { ColorKeys } from '@shiba-ui/shared';

export const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled(Animated.View)<{
  background?: ColorKeys;
  borderRadius?: number;
  maxHeight?: number;
}>`
  ${({ theme, background = 'section', borderRadius = 25, maxHeight }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    background: ${theme.colors[background]};
    border-top-left-radius: ${borderRadius}px;
    border-top-right-radius: ${borderRadius}px;
    
    padding: 20px;
    max-height: ${maxHeight}px;
    width: 100%;
  `}
`;

export const HandleContainer = styled.View`
  width: 100%;
  padding: 8px 0;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
`;

export const Handle = styled.View`
  ${({ theme }) => css`
    width: 40px;
    height: 4px;
    background-color: ${theme.colors.highlight};
    border-radius: 2px;
  `}
`;

