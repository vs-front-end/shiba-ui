import * as S from "./styles";
import { ITextDisplay } from "@shiba-ui/shared";

export const TextDisplay = ({
  text,
  fontSize,
  fontWeight,
  color,
  textAlign,
  textDecoration,
  lineHeight,
  letterSpacing,
  isHidden,
}: ITextDisplay) => {
  if (isHidden) return null;

  return (
    <S.Container
      role="text"
      color={color}
      aria-label={text}
      aria-hidden={isHidden}
      data-testid="text-display"
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      textDecoration={textDecoration}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
    >
      {text || "-"}
    </S.Container>
  );
};
