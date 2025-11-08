import React, { useState } from 'react';
import { IAvatar } from '@shiba-ui/shared';
import { TextDisplay, Skeleton } from '@shiba-ui/browser';
import * as S from './styles';

export const Avatar: React.FC<IAvatar> = ({
  isHidden = false,
  username,
  image,
  size,
  textColor,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const getNameInitials = (name: string = 'User') => {
    const [first = '', second = ''] = name.trim().split(' ');
    return (first[0] || '') + (second[0] || '')?.toUpperCase();
  };

  const getFontSize = (size: number) => {
    return size / 2.25;
  };

  const formattedUserName = getNameInitials(username);

  if (isHidden) return null;

  if (!image) {
    return (
      <S.Container
        role="img"
        aria-label={username || 'User avatar'}
        data-testid="avatar-text"
        size={size}
        textColor={textColor}
        {...props}
      >
        <TextDisplay
          text={formattedUserName}
          color={textColor || 'paper'}
          fontSize={getFontSize(size || 50)}
          fontWeight="medium"
        />
      </S.Container>
    );
  }

  return (
    <S.Wrapper {...props}>
      {isLoading && <Skeleton width={size} height={size} borderRadius={50} />}

      <S.Image
        role="img"
        data-testid="avatar-image"
        src={image}
        alt={username || 'User avatar'}
        aria-hidden={isLoading}
        onLoad={() => setIsLoading(false)}
        size={size}
      />
    </S.Wrapper>
  );
};
