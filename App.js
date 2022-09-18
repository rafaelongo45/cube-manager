import { StyleSheet, View } from "react-native";
import FooterComponent from "./components/Footer/Index";
import HeaderComponent from "./components/Header/Index";
import HomeComponent from "./components/Home/Index";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <HomeComponent />
      <FooterComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#2D2D2D",
  },
});
