import { TextInput, type TextInputProps } from "react-native"

interface CustomInputProps extends TextInputProps {
  placeholder: string
}

export function CustomInput({ placeholder, ...props }: CustomInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#d97706"
      className="h-12 bg-white/70 border border-amber-200 rounded-lg px-4 text-amber-900 placeholder:text-amber-500"
      {...props}
    />
  )
}
