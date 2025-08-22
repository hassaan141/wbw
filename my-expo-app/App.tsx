
import React, { JSX, ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/hooks/useAuth';
import AuthSignInScreen from './src/screens/AuthSignInScreen';
import MainScreen from './src/screens/MainScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { useAuth } from './src/hooks/useAuth';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Profile: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator(): ReactElement {
  const { session } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!session ? (
          <Stack.Screen name="Auth" component={AuthSignInScreen} />
        ) : (
          <>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App(): ReactElement {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}