import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  // Add any additional props if needed
}

export const CustomInput: React.FC<CustomInputProps> = ({ className, ...props }) => {
  return (
    <TextInput
      className={`border border-red-200 bg-white px-4 py-3 rounded-lg text-base text-red-900 placeholder:text-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 ${className || ''}`}
      placeholderTextColor="#fca5a5"
      {...props}
    />
  );
};
