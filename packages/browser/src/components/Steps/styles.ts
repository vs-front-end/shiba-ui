import styled, { css } from 'styled-components';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
`;

export const Step = styled.div<{
  stepSize?: number;
  background?: ColorKeys;
  textColor?: ColorKeys;
}>`
  ${({ theme, stepSize = 32, background = 'primary' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${stepSize}px;
    height: ${stepSize}px;
    background: ${theme.colors[background]};
    border-radius: 50%;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `}
`;

export const StepLabel = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

export const Connector = styled.div<{
  lineWidth?: number;
  lineHeight?: number;
  lineColor?: ColorKeys;
}>`
  ${({ theme, lineHeight = 2, lineColor = 'highlight' }) => css`
    flex: 1;
    min-width: 0;
    height: ${lineHeight}px;
    background: ${theme.colors[lineColor]};
    margin: 0 8px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  `}
`;
