import React from 'react';
import { IRow } from '@shiba-ui/shared';
import * as S from './styles';

export const Row: React.FC<IRow> = ({ children, isHidden, ...props }) => {
  if (isHidden) return null;

  return (
    <S.Container data-testid="row" aria-label="row" {...props}>
      {children}
    </S.Container>
  );
};
