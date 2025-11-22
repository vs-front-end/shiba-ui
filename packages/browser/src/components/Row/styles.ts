import styled from 'styled-components';
import type { IRow } from '@shiba-ui/shared';

export const Container = styled.div<IRow>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap = 8 }) => gap}px;
  ${({ flex }) => (flex !== undefined ? `flex: ${flex};` : '')}

  align-items: ${({ align = 'center' }) => {
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

  flex-wrap: ${({ noWrap = false }) => (noWrap ? 'nowrap' : 'wrap')};
`;
