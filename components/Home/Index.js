import { StyleSheet, View } from "react-native-web";
import FooterComponent from "../Footer/Index";
import HeaderComponent from "../Header/Index";

function HomeComponent() {
  return (
    <View style={HomeStyle.container}>
      <HeaderComponent />
      <article style={HomeStyle.wrapper}>Opa sou o componente home em!</article>
      <FooterComponent />
    </View>
  );
}

export default HomeComponent;

const HomeStyle = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#2D2D2D",
  },
  wrapper: {
    marginTop: 80,
    marginBottom: 80,
    color: "white",
  },
});
