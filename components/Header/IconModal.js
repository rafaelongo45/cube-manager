import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons.js";
import PasswordModal from "./PasswordModal.js";

function IconModal({ setIsOpen, modalTitle, iconModalName }) {
  const windowHeight = Dimensions.get("window").height;
  return (
    <Wrapper height={windowHeight}>
      <Background
        onPress={() => {
          setIsOpen(false);
        }}
      ></Background>
      <ModalBg height={windowHeight}>
        <ModalTitle>
          <IconWrapper>
            <Icon name={iconModalName} size={30} color="#fff" />
          </IconWrapper>
          <Text>New {modalTitle}</Text>
        </ModalTitle>
        <PasswordModal setIsOpen={setIsOpen} windowHeight={windowHeight} />
      </ModalBg>
    </Wrapper>
  );
}

export default IconModal;

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  z-index: 2;
`;

const Background = styled.Pressable`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const ModalBg = styled.View`
  position: absolute;
  top: 90px;
  z-index: 3;
  height: ${({ height }) => `${height * 0.7}px`};
  width: 90%;
  background-color: #3c3c3c;
  border-radius: 20px;
`;

const ModalTitle = styled.View`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  width: 100%;
  height: 10%;
`;

const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #6d6d6d;
`;

const Text = styled.Text`
  margin: 2px 10px;
  color: white;
  font-size: 22px;
  font-weight: 700;
`;
