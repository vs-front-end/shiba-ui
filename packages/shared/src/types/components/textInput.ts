import { ColorKeys } from '../../theme';
import React from 'react';

export interface ITextInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  handleChange?: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
  isHidden?: boolean;
  isDisabled?: boolean;

  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderRadius?: number;
  borderWidth?: number;
  textColor?: ColorKeys;
  height?: number;
  width?: number;
}
