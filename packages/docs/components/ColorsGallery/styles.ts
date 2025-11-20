import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 24px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const ThemeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const ThemeTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #151515;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

export const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  border: 1px solid #e0e0e0;
  border-radius: 8px;
  
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
    border-color: #7f2bff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ColorSwatch = styled.div<{ $color: string }>`
  width: 100%;
  height: 120px;
  background-color: ${({ $color }) => $color};
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

export const ColorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ColorName = styled.span`
  font-weight: 600;
  color: #151515;
`;

export const HexCode = styled.span`
  color: #666;
  font-family: monospace;
  cursor: pointer;
  user-select: all;

  &:hover {
    color: #7f2bff;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #999;
`;

