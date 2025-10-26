import { ColorKeys } from "../../theme/theme";
import { ITextDisplay } from "./textDisplay";

export interface ITextLink extends ITextDisplay {
  href: string;
  hoverColor?: ColorKeys;
  isExternal?: boolean;
}
