import styled from "styled-components";
import Icon from "react-native-vector-icons/Ionicons.js";

function MyItemComponent({ name, icon }) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon name={icon} size={60} color="#fff" />
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
  height: 40%;
  width: 55%;
  border-radius: 12px;
  background-color: #3c3c3c;
`;

const Title = styled.Text`
  margin-top: 10px;
  align-self: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;
