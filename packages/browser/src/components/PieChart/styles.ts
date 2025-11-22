import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ChartContainer = styled.div<{
  size: number;
}>`
  ${({ size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${size}px;
    height: ${size}px;
  `}
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Path = styled.path<{
  isActive: boolean;
}>`
  ${({ isActive }) => css`
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    filter: ${isActive ? 'brightness(1.1)' : 'none'};
    transform: ${isActive ? 'scale(1.05)' : 'scale(1)'};
    transform-origin: center;

    &:hover {
      filter: brightness(1.05);
    }

    &:active {
      filter: brightness(0.95);
    }
  `}
`;
