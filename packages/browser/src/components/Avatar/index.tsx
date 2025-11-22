import { useState, useEffect } from 'react';
import type { IAvatar } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { Skeleton } from '../Skeleton';
import * as S from './styles';

const FONT_SIZE_DIVISOR = 2.25;

export const Avatar = ({
  isHidden = false,
  username,
  image,
  size,
  textColor,
  ...props
}: IAvatar) => {
  const [isLoading, setIsLoading] = useState(!!image);
  const [hasError, setHasError] = useState(false);

  const getNameInitials = (name?: string) => {
    if (!name || !name.trim()) return 'U';

    const parts = name.trim().split(' ').filter(Boolean);
    const first = parts[0]?.[0]?.toUpperCase() || '';
    const second = parts[1]?.[0]?.toUpperCase() || '';

    return first + second;
  };

  const getFontSize = (avatarSize: number) => {
    return avatarSize / FONT_SIZE_DIVISOR;
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const formattedUserName = getNameInitials(username);
  const shouldShowText = !image || hasError;
  const avatarSize = size || 50;

  useEffect(() => {
    if (image) {
      setIsLoading(true);
      setHasError(false);
    } else {
      setIsLoading(false);
    }
  }, [image]);

  if (isHidden) return null;

  if (shouldShowText) {
    return (
      <S.Container
        role="img"
        aria-label={username ? `${username} avatar` : 'User avatar'}
        data-testid="avatar-text"
        size={avatarSize}
        textColor={textColor}
        {...props}
      >
        <TextDisplay
          text={formattedUserName}
          color={textColor || 'paper'}
          fontSize={getFontSize(avatarSize)}
          fontWeight="medium"
        />
      </S.Container>
    );
  }

  return (
    <S.Wrapper {...props}>
      {isLoading && (
        <Skeleton width={avatarSize} height={avatarSize} borderRadius={50} />
      )}

      <S.Image
        role="img"
        data-testid="avatar-image"
        src={image}
        alt={username ? `${username} avatar` : 'User avatar'}
        aria-hidden={isLoading}
        onLoad={() => setIsLoading(false)}
        onError={handleImageError}
        size={avatarSize}
      />
    </S.Wrapper>
  );
};
