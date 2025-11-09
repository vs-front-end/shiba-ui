import 'styled-components/native';
import { Theme } from '@shiba-ui/shared';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
