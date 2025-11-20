import styled from 'styled-components';
import styledNative from 'styled-components/native';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 400px;
  padding: 16px;

  background: ${({ theme }) => theme.colors.background};
`;

export const NativeContainer = styledNative.View`
  overflow: hidden;

  justify-content: flex-start;
  align-items: center;
  gap: 0;

  width: 320px;
  height: 693px;

  padding: 0;
  max-width: 100%;
  margin: 0 auto;
 
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentWrapper = styledNative.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  padding: 16px;
  padding-top: 0;
`;
