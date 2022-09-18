import { StyleSheet, Text } from "react-native-web";
import { IoCube, IoHome } from "react-icons/io5";

function FooterComponent() {
  return (
    <article style={footerStyles.wrapper}>
      <p style={footerStyles.icon}>
        <IoHome />
      </p>
      <div style={footerStyles.circle}></div>
      <p style={footerStyles.icon}>
        <IoCube />
      </p>
    </article>
  );
}
export default FooterComponent;

const footerStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: 80,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3C3C3C",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  circle: {
    position: "relative",
    top: -45,
    width: 65,
    height: 65,
    borderRadius: "50%",
    backgroundColor: "#3C3C3C",
  },
  icon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
