import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COMMON_COLORS } from '@shiba-ui/shared';

export const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: COMMON_COLORS.primary,
        borderRadius: 4,
      }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{text}</Text>
    </TouchableOpacity>
  );
};
