import { Text, View } from "react-native";
import { StyleSheet} from "react-native-web";

function HeaderComponent() {
  return (
    <View style={headerStyles.wrapper}>
      <Text style={headerStyles.text}>Cube</Text>
    </View>
  );
}
export default HeaderComponent;

const headerStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: 60,
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C3C3C",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  text: {
    color: "white",
    fontWeight: "bold",
  },
});
