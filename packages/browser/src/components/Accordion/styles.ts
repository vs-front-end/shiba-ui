import styled, { css } from 'styled-components';
import { IAccordion } from '@shiba-ui/shared';

export const Container = styled.div<IAccordion>`
  ${({
    theme,
    background,
    borderColor,
    width,
    borderRadius,
    borderWidth,
  }) => css`
    overflow: hidden;

    width: ${width ? `${width}px` : '100%'};
    background: ${background ? theme.colors[background] : 'transparent'};

    border-style: solid;
    border-width: ${borderWidth ? `${borderWidth}px` : '1px'};
    border-radius: ${borderRadius ? `${borderRadius}px` : '8px'};
    border-color: ${theme.colors[borderColor || 'highlight']};
  `}
`;

export const Header = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 16px 20px;

  border: none;
  background: transparent;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const ContentWrapper = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    overflow: hidden;
    max-height: ${isOpen ? '1000px' : '0'};
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.5s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
  `}
`;

export const Content = styled.div<{ hasIcon?: boolean }>`
  ${({ hasIcon }) => css`
    width: 100%;
    padding: ${hasIcon ? '0 48px 16px 48px' : '0 36px 16px 20px'};
  `}
`;
