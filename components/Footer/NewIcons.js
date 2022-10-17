import Icon from "react-native-vector-icons/Ionicons.js";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { useContext } from "react";
import ModalContext from "../../contexts/ModalContext.js";

function NewIcons({ setDisplayIcons }) {
  const { setIsOpen, setModalTitle, setIconModalName } = useContext(ModalContext);

  const iconArr = [
    { circle: true, stringName: "list", title: 'checklist' },
    { circle: true, stringName: "document-text", title: 'note' },
    { circle: true, stringName: "alarm", title: 'reminder' },
    { circle: true, stringName: "key", title: 'password' },
  ];

  return (
    <IconsWrapper>
      {iconArr.map((iconObject) => {
        return (
          <IconWrapper circle={iconObject.circle} key={iconObject.stringName}>
            <Pressable
              onPress={() => {
                setIsOpen(true);
                setDisplayIcons(false);
                setModalTitle(iconObject.title);
                setIconModalName(iconObject.stringName);
              }}
            >
              <Icon
                name={iconObject.stringName}
                size={iconObject.circle ? 45 : 35}
                color="#fff"
              />
            </Pressable>
          </IconWrapper>
        );
      })}
    </IconsWrapper>
  );
}
export default NewIcons;

const IconsWrapper = styled.View`
  position: absolute;
  bottom: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: 70px;
  background-color: transparent;
`;

const IconWrapper = styled.View`
  position: ${({ circle }) => (circle ? "relative" : "static")};
  top: ${({ circle }) => (circle ? "-100px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ circle }) => (circle ? "70px" : "11%")};
  border-radius: ${({ circle }) => (circle ? "50px" : "16px")};
  height: ${({ circle }) => (circle ? "70px" : "50px")};
  background-color: #3c3c3c;
`;
