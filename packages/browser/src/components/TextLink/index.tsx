import * as S from "./styles";
import { ITextLink } from "@shiba-ui/shared";

export const TextLink = ({
  text,
  href,
  fontSize,
  fontWeight,
  color,
  hoverColor,
  textAlign,
  textDecoration,
  lineHeight,
  letterSpacing,
  isHidden,
  isExternal,
}: ITextLink) => {
  if (isHidden) return null;

  return (
    <S.Container
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      role="link"
      aria-label={text}
      aria-hidden={isHidden}
      data-testid="text-link"
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      hoverColor={hoverColor}
      textAlign={textAlign}
      textDecoration={textDecoration}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
    >
      {text || "-"}
    </S.Container>
  );
};
