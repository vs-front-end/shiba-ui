import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 400px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.background};
`;
