import React from 'react';
import { useTheme } from 'styled-components/native';
import { Icon, TextDisplay } from '@shiba-ui/app';
import * as S from './styles';

export const AppStatusBar = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <S.Container>
      <S.Icons>
        <TextDisplay text={currentTime} fontSize={12} fontWeight="medium" />
        <Icon icon="message-circle" size={13} color="content" />
        <Icon icon="more-horizontal" size={12} color="content" />
      </S.Icons>

      <S.Icons>
        <Icon icon="bluetooth" size={12} color="content" />
        <Icon icon="bar-chart" size={14} color="content" />
        <Icon icon="wifi" size={16} color="content" />
        <Icon icon="battery-charging" size={18} color="content" />
      </S.Icons>
    </S.Container>
  );
};
