import React from 'react';
import { ISeparator } from '@shiba-ui/shared';
import * as S from './styles';

export const Separator: React.FC<ISeparator> = ({ isHidden, ...props }) => {
  if (isHidden) return null;

  return (
    <S.Container
      data-testid="separator"
      role="separator"
      aria-orientation={props.orientation || 'horizontal'}
      {...props}
    />
  );
};
