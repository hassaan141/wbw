"use client"

import React, { useState } from "react"
import { View, Text, TouchableOpacity, Alert } from "react-native"
import { CustomInput } from "../../components/custom-input"
import { AuthButton } from "../../components/auth-button"

export default function AuthSignInScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      console.log("[v0] Auth attempt:", { email, isSignUp })
    }, 2000)
  }

  return (
    <View className="flex-1 bg-amber-50 justify-center px-6 py-12">
      <View className="items-center mb-8">
        <View className="mb-3">
          <Text className="text-xl text-red-800 text-center leading-7 mb-1 font-serif">
            وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ
          </Text>
          <Text className="text-base text-red-800 text-center leading-6 font-serif">فَهَلْ مِن مُّدَّكِرٍ</Text>
        </View>
        <Text className="text-xs text-red-700 text-center italic leading-4 px-4">
          "And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?"
        </Text>
        <Text className="text-xs text-red-600 mt-1">Surah Al-Qamar (54:40)</Text>
      </View>

      <View className="w-full max-w-sm mx-auto">
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-red-800 mb-3">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </Text>
          <Text className="text-lg text-red-700 font-medium">{isSignUp ? "Join our community" : "Continue your journey"}</Text>
        </View>

        <View className="space-y-6">
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

          <AuthButton onPress={handleAuth} loading={loading} title={isSignUp ? "Create Account" : "Sign In"} />

          <View className="items-center space-y-4">
            {!isSignUp && (
              <TouchableOpacity>
                <Text className="text-sm text-red-600">Forgot password?</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
              <Text className="text-sm text-red-700 font-medium">
                {isSignUp ? "Already have an account?" : "Need an account?"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
