import { StyleSheet } from "react-native-web";
import Icon from "react-native-vector-icons/Ionicons.js";
import styled from "styled-components";

function RenderIcon({ circle, stringName, iconClicked, setIconClicked }) {
  return (
    <>
      {circle ? (
        <PlusWrapper>
          <Icon name={stringName} size={55} color="#fff" />
        </PlusWrapper>
      ) : (
        <IconWrapper>
          <Icon name={stringName} size={35} color="#fff" />
        </IconWrapper>
      )}
    </>
  );
}
export default RenderIcon;

const IconWrapper = styled.View`
  display: flex;
  background-color: red;
  justify-content: center;
  align-items: center;
  width: 11%;
  height: 50px;
  color: white;
  padding: 5px 20px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.25);
`;

const PlusWrapper = styled.View`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  top: -50px;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #3c3c3c;
`;