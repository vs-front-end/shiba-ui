import styled, { css } from 'styled-components';
import type { ITextLink } from '@shiba-ui/shared';
import type { TextDecorationType } from '../TextDisplay';

interface ITextLinkBrowser extends ITextLink {
  textDecoration?: TextDecorationType;
}

export const Container = styled.a<ITextLinkBrowser>`
  ${({
    theme,
    color = 'content',
    hoverColor = 'primary',
    fontSize = 16,
    fontWeight = 'regular',
    textAlign = 'left',
    textDecoration = 'underline',
    lineHeight = 'normal',
    letterSpacing = 'normal',
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${`${fontSize}px`};
    font-weight: ${theme.fontWeight[fontWeight]};
    font-family: ${theme.fontFamily};

    text-align: ${textAlign};
    text-decoration: ${textDecoration};

    line-height: ${lineHeight};
    letter-spacing: ${`${letterSpacing}px`};

    word-break: break-word;
    overflow-wrap: anywhere;

    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors[hoverColor]};
      text-decoration: underline;
    }
  `}
`;
