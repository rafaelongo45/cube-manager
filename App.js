import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeComponent from "./components/Home/Index";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor={"#3C3C3C"} barStyle={"light-content"}/>
    </NavigationContainer>
  );
}
