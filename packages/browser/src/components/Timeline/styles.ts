import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  padding: 0 8px;
`;

export const Item = styled.div`
  display: flex;
  gap: 8px;
`;

export const Marker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  padding-top: 8px;
  width: 16px;
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.highlight || '#e0e0e0'};
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    flex: 1;
    width: 1px;
    background-color: ${theme.colors.highlight || '#e0e0e0'};
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${theme.colors.highlight || '#e0e0e0'};
  `}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 4px;
`;
