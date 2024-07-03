import React from 'react';
import { ScrollView,StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';
import MainContent from './components/HomeScreen';
import Cart from './components/CartScreen';

const App = () => {
  return(
    <ScrollView style={style.container}>
      <HomeScreen />
      <Cart />
    </ScrollView>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});

export default App;

// import * as React from "react";
// import { StyleSheet } from "react-native";
// import CartScreen from "./component/CartScreen";
// import HomeScreen from "./component/HomeScreen";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerTitle: " " }}
//         />
//         <Stack.Screen
//           name="Checkout"
//           component={CartScreen}
//           options={{ headerTitle: " " }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     alignItems: "center",
//     display: "flex",
//     height: "100%",
//     width: "100%",
//     paddingTop: 30,
//   },
// });
