import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeComponent from "./components/Home/Index";
import MyStuffComponent from "./components/MyStuff/Index";
import { NavigationProvider } from "./contexts/NavigationContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <NavigationProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeComponent}
            options={{
              headerShown: false,
              title: "Home",
              animation: "none",
            }}
          />
          <Stack.Screen
            name="MyStuff"
            component={MyStuffComponent}
            options={{
              headerShown: false,
              title: "MyStuff",
              animation: "none",
            }}
          />
        </Stack.Navigator>
      </NavigationProvider>
      <StatusBar backgroundColor={"#3C3C3C"} barStyle={"light-content"} />
    </NavigationContainer>
  );
}
