import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native"

interface AuthButtonProps {
  onPress: () => void
  loading: boolean
  title: string
}

export function AuthButton({ onPress, loading, title }: AuthButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className={`w-full h-12 bg-amber-800 rounded-lg justify-center items-center ${loading ? "opacity-70" : ""}`}
    >
      {loading ? (
        <View className="flex-row items-center">
          <ActivityIndicator size="small" color="white" className="mr-2" />
          <Text className="text-white font-medium">Please wait...</Text>
        </View>
      ) : (
        <Text className="text-white font-medium">{title}</Text>
      )}
    </TouchableOpacity>
  )
}
