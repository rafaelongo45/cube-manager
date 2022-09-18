import { StyleSheet, Text } from "react-native-web";

function HeaderComponent() {
  return (
    <article style={headerStyles.wrapper}>
      <h1 style={headerStyles.text}>Cube</h1>
    </article>
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
