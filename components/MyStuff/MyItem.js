import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons.js";

function MyItemComponent({ name, icon }) {
  return (
    <Wrapper>
      <IconWrapper name={name}>
        <Icon name={icon} size={45} color="#fff" />
      </IconWrapper>
      <Title>{name}</Title>
    </Wrapper>
  );
}

export default MyItemComponent;

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 40%;
  border-radius: 50px;
  margin: 10px auto;
`;

const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 75px;
  border-radius: 35px;
  background-color: #3c3c3c;
`;

const Title = styled.Text`
  margin-top: 10px;
  align-self: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;
