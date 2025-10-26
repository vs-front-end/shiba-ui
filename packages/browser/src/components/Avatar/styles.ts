import styled, { css } from "styled-components";
import { ColorKeys, IAvatar } from "@shiba-ui/shared";

export const Container = styled.div<IAvatar>`
  ${({ theme, background = "primary", size = 50 }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${size}px;
    height: ${size}px;
    background: ${theme.colors[background as ColorKeys]};
    border-radius: 50%;

    overflow: hidden;
    position: relative;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Image = styled.img<IAvatar>`
  ${({ size = 50 }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;

    object-fit: cover;

    &[aria-hidden="true"] {
      display: none;
    }
  `}
`;
