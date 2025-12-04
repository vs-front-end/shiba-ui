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
    max-height: 90vh;
    margin: 0 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `}
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.highlight};
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`;

