import React from 'react';
import { COMMON_COLORS } from '@shiba-ui/shared';

export const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      style={{
        padding: '8px 16px',
        backgroundColor: COMMON_COLORS.primary,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      {text}
    </button>
  );
};
