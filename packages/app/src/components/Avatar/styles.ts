import styled, { css } from 'styled-components/native';
import { IAvatar } from '@shiba-ui/shared';
import { Image as RNImage } from 'react-native';

export const Container = styled.View<IAvatar>`
  ${({ theme, background = 'primary', size = 50 }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${`${size}px`};
    height: ${`${size}px`};
    min-width: ${`${size}px`};
    min-height: ${`${size}px`};
    max-width: ${`${size}px`};
    max-height: ${`${size}px`};

    border-radius: ${`${size / 2}px`};
    background: ${(background && theme.colors[background]) || 'transparent'};

    overflow: hidden;
  `}
`;

export const Wrapper = styled.View<{ size?: number }>`
  position: relative;

  ${({ size = 50 }) => css`
    width: ${`${size}px`};
    height: ${`${size}px`};
    min-width: ${`${size}px`};
    min-height: ${`${size}px`};
    max-width: ${`${size}px`};
    max-height: ${`${size}px`};
  `}
`;

export const Image = styled(RNImage)<IAvatar>`
  ${({ size = 50 }) => css`
    position: absolute;
    top: 0;
    left: 0;

    width: ${`${size}px`};
    height: ${`${size}px`};
    border-radius: ${`${size / 2}px`};
  `}
`;

export const SkeletonWrapper = styled.View<{ size?: number }>`
  position: absolute;
  top: 0;
  left: 0;

  ${({ size = 50 }) => css`
    width: ${`${size}px`};
    height: ${`${size}px`};
  `}
`;
