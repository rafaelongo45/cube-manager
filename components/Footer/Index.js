import { StyleSheet} from "react-native-web";
import RenderIcon from "./RenderIcon.js";
import { useState } from "react";
import { View } from "react-native";

function FooterComponent() {
  const [iconClicked, setIconClicked] = useState("");
  const iconArr = [
    { circle: false, stringName: "home-sharp" },
    { circle: true, stringName: "add" },
    { circle: false, stringName: "file-tray-sharp" },
  ];
  return (
    <View style={footerStyles.wrapper}>
      {iconArr.map((iconObject) => {
        return (
          <RenderIcon
            key={iconObject.stringName}
            circle={iconObject.circle}
            stringName={iconObject.stringName}
            iconClicked={iconClicked}
            setIconClicked={setIconClicked}
          />
        );
      })}
    </View>
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
    flexDirection: "row"  ,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3C3C3C",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  plusIcon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    position: "absolute",
    top: 8,
  },

  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    height: 50,
    width: 50,
    borderRadius: "20%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
});
