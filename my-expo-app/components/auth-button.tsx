import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface AuthButtonProps {
  onPress: () => void;
  loading?: boolean;
  title: string;
  disabled?: boolean;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ 
  onPress, 
  loading = false, 
  title, 
  disabled = false 
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || disabled}
      className={`w-full bg-red-600 py-4 rounded-lg items-center ${
        loading || disabled ? 'opacity-50' : ''
      }`}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-white font-semibold text-base">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
