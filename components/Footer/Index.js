import { StyleSheet } from "react-native-web";
import { IoCube, IoHome } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import RenderIcon from "./RenderIcon.js";
import { useState } from "react";

function FooterComponent() {
  const [iconClicked, setIconClicked] = useState("");
  const iconArr = [
    { name: IoHome, circle: false, stringName: "IoHome" },
    { name: FiPlus, circle: true, stringName: "FiPlus" },
    { name: IoCube, circle: false, stringName: "IoCube" },
  ];
  return (
    <article style={footerStyles.wrapper}>
      {iconArr.map((iconObject) => {
        return (
          <RenderIcon
            Name={iconObject.name}
            key={iconObject.name}
            circle={iconObject.circle}
            stringName={iconObject.stringName}
            iconClicked={iconClicked}
            setIconClicked={setIconClicked}
          />
        );
      })}
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
