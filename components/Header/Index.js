import { useContext } from "react";
import IconModal from "./IconModal.js";
import styled from "styled-components/native";

import ModalContext from "../../contexts/ModalContext.js";

function HeaderComponent() {
  const { isOpen, setIsOpen, modalTitle, iconModalName } =
    useContext(ModalContext);
  return (
    <Main>
      <Text>Cube</Text>
      {isOpen ? (
        <IconModal
          setIsOpen={setIsOpen}
          modalTitle={modalTitle}
          iconModalName={iconModalName}
        />
      ) : (
        <></>
      )}
    </Main>
  );
}
export default HeaderComponent;

const Main = styled.View`
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: #3c3c3c;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const Text = styled.Text`
  color: white;
  font-weight: 700;
`;
