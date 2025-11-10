import styled from 'styled-components';
import type { IColumn } from '@shiba-ui/shared';

export const Container = styled.div<IColumn>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap = 0 }) => `${gap}px`};
  ${({ flex }) => (flex !== undefined ? `flex: ${flex};` : '')}

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
