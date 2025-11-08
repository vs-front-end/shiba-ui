import * as S from './styles';
import { ISpinner } from '@shiba-ui/shared';

export const Spinner = ({ isHidden, ...props }: ISpinner) => {
  if (isHidden) return null;

  return (
    <S.Container
      role="status"
      aria-label="Loading"
      aria-busy="true"
      data-testid="spinner"
      {...props}
    />
  );
};
