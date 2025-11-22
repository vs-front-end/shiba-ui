import styled, { css } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Item = styled.div<{
  isActive?: boolean;
}>`
  ${({ isActive }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: ${isActive ? 'default' : 'pointer'};
    transition: opacity 0.2s ease;

    &:hover {
      opacity: ${isActive ? 1 : 0.8};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
      border-radius: 4px;
    }
  `}
`;

export const EllipsisWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const HiddenDialog = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    padding: 8px;
    background: ${theme.colors.section || '#ffffff'};
    border: 1px solid ${theme.colors.highlight || '#e0e0e0'};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    
    z-index: 1000;
    min-width: 120px;
    max-width: 200px;
    margin-top: 4px;
  `}
`;

export const HiddenItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    word-break: break-word;
    overflow-wrap: break-word;

    &:hover {
      background: ${theme.colors.highlight || '#f5f5f5'};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `}
`;
