import type { ColorKeys } from '../../theme';
import type {
  IBaseVisibility,
  IBaseInteraction,
  IBaseLayout,
  IBaseStyling,
} from './base-props';

export type InputType =
  | 'text'
  | 'phone'
  | 'cellphone'
  | 'cpf'
  | 'cnpj'
  | 'cep'
  | 'monetary'
  | 'date'
  | 'credit-card';

export interface ITextInput
  extends IBaseVisibility,
    IBaseInteraction,
    IBaseLayout,
    IBaseStyling {
  /** Input value */
  value?: string;
  /** Callback when value changes */
  handleChange?: (value: string) => void;
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Shows error state */
  hasError?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Maximum length of input */
  maxLength?: number;
  /** Input type for automatic formatting */
  type?: InputType;
}
