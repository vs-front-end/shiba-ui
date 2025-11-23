import styled, { css } from 'styled-components/native';
import type { ColorKeys } from '@shiba-ui/shared';

export const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Container = styled.View<{
  background?: ColorKeys;
  borderRadius?: number;
}>`
  ${({ theme, background = 'section', borderRadius = 12 }) => css`
    position: relative;
    z-index: 2;
    background: ${theme.colors[background]};
    border-radius: ${borderRadius}px;
    padding: 24px;
    max-width: 400px;
    margin: 0 20px;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
  `}
`;

export const Content = styled.View`
  width: 100%;
  gap: 8px;
  margin-bottom: 24px;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
`;
