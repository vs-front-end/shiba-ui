import styled, { css } from "styled-components";
import { IButton } from "@shiba-ui/shared";

export const Container = styled.button<IButton>`
  ${({
    theme,
    height = 40,
    width = 200,
    background = "primary",
    borderColor = "primary",
    borderRadius = 8,
    borderWidth = 0,
    padding = "8px 16px",
    gap = "12px",
    isFullWidth = false,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${gap};

    border-style: solid;
    border-width: ${`${borderWidth}px`};
    border-color: ${theme.colors[borderColor]};
    border-radius: ${`${borderRadius}px`};

    padding: ${padding};
    height: ${`${height}px`};
    width: ${isFullWidth ? "100%" : `${width}px`};
    background: ${theme.colors[background]};

    cursor: pointer;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover:not(:disabled):not([aria-busy="true"]) {
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-busy="true"]) {
      transform: translateY(0);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;
