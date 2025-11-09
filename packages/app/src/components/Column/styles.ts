import styled from 'styled-components/native';
import { IColumn } from '@shiba-ui/shared';

export const Container = styled.View<IColumn>`
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: ${({ gap = 0 }) => `${gap}px`};

  align-items: ${({ align = 'start' }) => {
    const alignMap = {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
    };

    return alignMap[align];
  }};

  justify-content: ${({ justify = 'start' }) => {
    const justifyMap = {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly',
    };

    return justifyMap[justify];
  }};
`;
