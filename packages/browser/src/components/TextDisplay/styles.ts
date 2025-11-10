import styled, { css } from 'styled-components';
import type { ITextDisplay } from '@shiba-ui/shared';

export const Container = styled.span<
  ITextDisplay & { textDecoration: string }
>`
  ${({
    theme,
    color = 'content',
    fontSize = 16,
    fontWeight = 'regular',
    textAlign = 'left',
    textDecoration = 'none',
    lineHeight = 'normal',
    letterSpacing = 'normal',
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${`${fontSize / 10}rem`};
    font-weight: ${theme.fontWeight[fontWeight]};

    text-align: ${textAlign};
    text-decoration: ${textDecoration};

    line-height: ${lineHeight};
    letter-spacing: ${`${letterSpacing}px`};

    font-family: ${theme.fontFamily};

    word-break: break-word;
    overflow-wrap: anywhere;
  `}
`;
