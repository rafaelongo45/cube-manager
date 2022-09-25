import { StyleSheet } from "react-native-web";
import styled from "styled-components";

function HeaderComponent() {
  return (
    <Main>
      <Text>Cube</Text>
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
