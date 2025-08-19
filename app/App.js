// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>{SUPABASE_KEY}</Text>
//       <Text>{SUPABASE_URL}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import { SUPABASE_KEY, SUPABASE_URL } from "@env";
// import "./global.css"


export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-base font-semibold text-blue-700 mb-2">SUPABASE_KEY:</Text>
      <Text className="text-xs text-gray-500 mb-4">{SUPABASE_KEY}</Text>
      <Text className="text-base font-semibold text-blue-700 mb-2">SUPABASE_URL:</Text>
      <Text className="text-xs text-gray-500">{SUPABASE_URL}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// import "./global.css"
// import { Text, View } from "react-native";
 
// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-xl font-bold text-blue-500">
//         Welcome to Nativewind!
//       </Text>
//     </View>
//   );
// }