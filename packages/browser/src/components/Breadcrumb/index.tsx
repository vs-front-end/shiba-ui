import * as S from './styles';
import { IBreadcrumb, IBreadcrumbItem } from '@shiba-ui/shared';
import { useState, useRef } from 'react';
import { TextDisplay } from '../TextDisplay';
import { Icon } from '../Icon';

interface IEllipsisItem {
  label: string;
  isEllipsis: true;
}

type BreadcrumbDisplayItem = IBreadcrumbItem | IEllipsisItem;

export const Breadcrumb = ({
  items,
  separator = '/',
  fontSize = 16,
  color = 'content',
  activeColor = 'primary',
  separatorColor = 'highlight',
  maxItems = 4,
  isHidden,
  ...props
}: IBreadcrumb) => {
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showHiddenItems, setShowHiddenItems] = useState(false);

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowHiddenItems(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowHiddenItems(false);
    }, 150);
  };

  const shouldTruncate = items.length > maxItems;

  const getDisplayItems = (): BreadcrumbDisplayItem[] => {
    if (!shouldTruncate) return items;

    const first = items[0];
    const last = items[items.length - 1];
    const secondLast = items[items.length - 2];

    return [first, { label: '...', isEllipsis: true }, secondLast, last];
  };

  const getHiddenItems = (): IBreadcrumbItem[] => {
    if (!shouldTruncate) return [];
    return items.slice(1, items.length - 2);
  };

  const isEllipsisItem = (
    item: BreadcrumbDisplayItem
  ): item is IEllipsisItem => {
    return 'isEllipsis' in item && item.isEllipsis === true;
  };

  const displayItems = getDisplayItems();
  const hiddenItems = getHiddenItems();

  if (isHidden || !items || items.length === 0) return null;

  return (
    <S.Container
      role="navigation"
      aria-label="Breadcrumb"
      data-testid="breadcrumb"
      {...props}
    >
      {displayItems.map((item, index) => (
        <S.ItemWrapper key={index}>
          {isEllipsisItem(item) ? (
            <S.EllipsisWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <TextDisplay
                text="..."
                fontSize={fontSize}
                color={separatorColor}
              />

              {showHiddenItems && (
                <S.HiddenDialog
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {hiddenItems.map((hiddenItem, hiddenIndex) => (
                    <S.HiddenItem
                      key={hiddenIndex}
                      onClick={() => hiddenItem.onClick?.()}
                    >
                      {hiddenItem.icon && (
                        <Icon
                          icon={hiddenItem.icon}
                          size={hiddenItem.iconSize || 12}
                          color={hiddenItem.iconColor || color}
                        />
                      )}

                      <TextDisplay
                        text={hiddenItem.label}
                        fontSize={fontSize}
                        color={color}
                        fontWeight="medium"
                      />
                    </S.HiddenItem>
                  ))}
                </S.HiddenDialog>
              )}
            </S.EllipsisWrapper>
          ) : (
            <S.Item isActive={item.isActive} onClick={() => item.onClick?.()}>
              {item.icon && (
                <Icon
                  icon={item.icon}
                  size={item.iconSize || 12}
                  color={
                    item.iconColor || (item.isActive ? activeColor : color)
                  }
                />
              )}
              
              <TextDisplay
                text={item.label}
                fontSize={fontSize}
                color={item.isActive ? activeColor : color}
                fontWeight="medium"
              />
            </S.Item>
          )}

          {index < displayItems.length - 1 && (
            <TextDisplay
              text={separator}
              fontSize={fontSize}
              color={separatorColor}
            />
          )}
        </S.ItemWrapper>
      ))}
    </S.Container>
  );
};
