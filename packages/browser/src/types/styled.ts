import 'styled-components';
import { Theme } from '@shiba-ui/shared';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
