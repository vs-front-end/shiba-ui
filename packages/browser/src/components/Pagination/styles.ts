import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonControl = styled.button<{ isSelected?: boolean }>`
  ${({ theme, isSelected }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    padding: 0 8px;
    border-radius: 4px;
    background: ${isSelected ? theme.colors.highlight : 'transparent'};
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.highlight};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:disabled:hover {
      background-color: transparent;
    }
  `}
`;

export const PageInput = styled.input`
  ${({ theme }) => css`
    width: 50px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${theme.colors.highlight};
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
    color: ${theme.colors.content};
    background-color: transparent;
    font-family: ${theme.fontFamily};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    -moz-appearance: textfield;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      transition: border-color 0.2s ease-in-out;
    }
  `}
`;
