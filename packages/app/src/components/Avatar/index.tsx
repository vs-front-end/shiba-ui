import * as S from './styles';
import { useState } from 'react';
import type { IAvatar } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { Skeleton } from '../Skeleton';

export const Avatar = ({
  isHidden = false,
  username,
  image,
  size,
  textColor,
  ...props
}: IAvatar) => {
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
        data-testid="avatar-text"
        accessibilityRole="image"
        accessibilityLabel={username || 'User avatar'}
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
    <S.Wrapper size={size} {...props}>
      {isLoading && (
        <S.SkeletonWrapper size={size}>
          <Skeleton width={size} height={size} borderRadius={50} />
        </S.SkeletonWrapper>
      )}

      <S.Image
        data-testid="avatar-image"
        source={{ uri: image }}
        accessibilityRole="image"
        accessibilityLabel={username || 'User avatar'}
        onLoad={() => setIsLoading(false)}
        size={size}
        style={{ opacity: isLoading ? 0 : 1 }}
        resizeMode="cover"
      />
    </S.Wrapper>
  );
};
