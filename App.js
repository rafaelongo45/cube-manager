import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import FooterComponent from "./components/Footer/Index";
import HeaderComponent from "./components/Header/Index";
import HomeComponent from "./components/Home/Index";
import MyStuffComponent from "./components/MyStuff/Index";
import { ModalProvider } from "./contexts/ModalContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import styled from "styled-components/native";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Main>
      <NavigationContainer>
        <ModalProvider>
          <NavigationProvider>
            <HeaderComponent />
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
            <FooterComponent />
          </NavigationProvider>
        </ModalProvider>
        <StatusBar backgroundColor={"#3C3C3C"} barStyle={"light-content"} />
      </NavigationContainer>
    </Main>
  );
}

const Main = styled.View`
  position: relative;
  background-color: #2d2d2d;
  height: 100%;
`;