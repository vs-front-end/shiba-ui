import styled, { css } from 'styled-components';
import type { ColorKeys } from '@shiba-ui/shared';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
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

export const Container = styled.div<{
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
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
`;

