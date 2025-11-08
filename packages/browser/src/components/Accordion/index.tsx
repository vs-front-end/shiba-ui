import * as S from './styles';
import { IAccordion } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState } from 'react';

export const Accordion = ({
  title,
  icon,
  children,
  onToggle,
  background,
  borderColor,
  titleColor,
  iconColor,
  iconSize,
  titleSize,
  width,
  isHidden,
  ...props
}: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    onToggle?.();
    setIsOpen(!isOpen);
  };

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="accordion"
      background={background}
      borderColor={borderColor}
      width={width}
      {...props}
    >
      <S.Header
        type="button"
        onClick={handleToggle}
        data-testid="accordion-header"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title}`}
      >
        <S.TitleContainer>
          {icon && (
            <Icon
              icon={icon}
              color={iconColor || 'content'}
              size={iconSize || 18}
            />
          )}

          <TextDisplay text={title} color={titleColor} fontSize={titleSize} />
        </S.TitleContainer>

        <S.IconContainer isOpen={isOpen}>
          <Icon
            icon={isOpen ? 'minus' : 'plus'}
            color={iconColor || 'content'}
            size={18}
          />
        </S.IconContainer>
      </S.Header>

      <S.ContentWrapper isOpen={isOpen}>
        <S.Content hasIcon={!!icon} data-testid="accordion-content">
          {children}
        </S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};
