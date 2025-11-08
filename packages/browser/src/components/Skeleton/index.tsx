import React from 'react';
import { ISkeleton } from '@shiba-ui/shared';
import * as S from './styles';

export const Skeleton: React.FC<ISkeleton> = ({
  isHidden = false,
  ...props
}) => {
  if (isHidden) return null;

  return (
    <S.Container
      role="progressbar"
      aria-label="Loading content"
      aria-busy="true"
      data-testid="skeleton"
      {...props}
    />
  );
};
