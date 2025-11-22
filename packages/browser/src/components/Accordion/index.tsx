import * as S from './styles';
import type { IAccordion } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState, useId } from 'react';

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
  const contentId = useId();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    onToggle?.();
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
        aria-controls={contentId}
        aria-label={
          title ? `${isOpen ? 'Collapse' : 'Expand'} ${title}` : undefined
        }
      >
        <S.TitleContainer>
          {icon && (
            <Icon
              icon={icon}
              color={iconColor || 'content'}
              size={iconSize || 16}
            />
          )}

          <TextDisplay
            text={title}
            color={titleColor}
            fontSize={titleSize || 14}
          />
        </S.TitleContainer>

        <S.IconContainer isOpen={isOpen}>
          <Icon
            icon={isOpen ? 'minus' : 'plus'}
            color={iconColor || 'content'}
            size={16}
          />
        </S.IconContainer>
      </S.Header>

      <S.ContentWrapper isOpen={isOpen}>
        <S.Content
          id={contentId}
          hasIcon={!!icon}
          data-testid="accordion-content"
        >
          {children}
        </S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};
