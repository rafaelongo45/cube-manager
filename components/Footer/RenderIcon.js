import { useContext, useState } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons.js";
import styled from "styled-components/native";
import NavigationContext from "../../contexts/NavigationContext.js";
import NewIcons from "./NewIcons.js";

function RenderIcon({ circle, stringName }) {
  const { navigation, button, setButton } = useContext(NavigationContext);
  const { navigate } = navigation;
  const [displayIcons, setDisplayIcons] = useState(false);

  function changeScreen(name) {
    setButton(stringName);
    if (name === "add") setDisplayIcons(!displayIcons);
    if (name === "home-sharp") navigate("Home");
    if (name === "file-tray-sharp") navigate("MyStuff");
  }
  return (
    <>
      {displayIcons ? <NewIcons setDisplayIcons={setDisplayIcons} /> : <></>}
      <IconWrapper circle={circle}>
        <Pressable
          onPress={() => {
            changeScreen(stringName);
          }}
        >
          <IconBg circle={circle} iconClicked={button} stringName={stringName}>
            <Icon name={stringName} size={circle ? 45 : 35} color="#fff" />
          </IconBg>
        </Pressable>
      </IconWrapper>
    </>
  );
}
export default RenderIcon;

const IconWrapper = styled.View`
  position: ${({ circle }) => (circle ? "relative" : "static")};
  top: ${({ circle }) => (circle ? "-50px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ circle }) => (circle ? "70px" : "11%")};
  border-radius: ${({ circle }) => (circle ? "50px" : "16px")};
  height: ${({ circle }) => (circle ? "70px" : "50px")};
  background-color: #3c3c3c;
`;

const IconBg = styled.View`
  position: ${({ circle }) => (circle ? "relative" : "static")};
  top: ${({ circle }) => (circle ? "-4px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ circle }) => (circle ? "50px" : "75px")};
  height: ${({ circle }) => (circle ? "50px" : "50px")};
  padding: ${({ circle }) => (circle ? "0 0 10px 3px" : "5px 20px")};
  background-color: ${({ iconClicked, stringName }) =>
    iconClicked === stringName ? "rgba(255, 255, 255, 0.25)" : "#3c3c3c"};
  border-radius: ${({ circle }) => (circle ? "50px" : "16px")};
`;
