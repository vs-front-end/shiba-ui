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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
    border-color: #7f2bff;
  }
`;

export const IconName = styled.span`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  word-break: break-word;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #999;
`;
