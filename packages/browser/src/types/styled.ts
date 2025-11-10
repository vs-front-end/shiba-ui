import 'styled-components';
import type { Theme } from '@shiba-ui/shared';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
