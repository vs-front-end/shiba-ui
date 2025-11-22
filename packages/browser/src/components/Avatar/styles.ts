import styled, { css } from 'styled-components';
import type { ColorKeys, IAvatar } from '@shiba-ui/shared';

export const Container = styled.div<IAvatar>`
  ${({ theme, background = 'primary', size = 50 }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: ${theme.colors[background as ColorKeys]};

    overflow: hidden;
    position: relative;
  `}
`;

export const Wrapper = styled.div<{ size?: number }>`
  position: relative;

  ${({ size = 50 }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
`;

export const Image = styled.img<IAvatar>`
  ${({ size = 50 }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;

    object-fit: cover;

    &[aria-hidden='true'] {
      display: none;
    }
  `}
`;
