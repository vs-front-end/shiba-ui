import styled, { keyframes } from 'styled-components';
import type { IDrawer } from '@shiba-ui/shared';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.25);

  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 225ms
    cubic-bezier(0.4, 0, 0.2, 1);

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

export const Container = styled.div<IDrawer>`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  height: 100%;
  width: ${({ width = '320px' }) => width};

  background: ${({ theme, background = 'section' }) =>
    theme.colors[background as keyof typeof theme.colors]};

  box-shadow: ${({ isOpen }) =>
    isOpen
      ? '0 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)'
      : 'none'};

  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 225ms
    cubic-bezier(0, 0, 0.2, 1);

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

export const Content = styled.div`
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;
