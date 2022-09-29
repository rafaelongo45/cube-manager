import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 20px;
  height: 20px;
  border: 2px white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.checked ? "white" : "transparent")};
`;
