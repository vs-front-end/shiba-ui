import React from 'react';
import { IColumn } from '@shiba-ui/shared';
import * as S from './styles';

export const Column: React.FC<IColumn> = ({ children, isHidden, ...props }) => {
  if (isHidden) return null;

  return (
    <S.Container data-testid="column" aria-label="column" {...props}>
      {children}
    </S.Container>
  );
};
