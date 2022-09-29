import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${(props) => (props.size > 1 ? 45 * props.size : 80)}px;
  margin-top: 100px;
  border-radius: 18px;
  background-color: #3c3c3c;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left: 22px;
  padding-bottom: ${(props) => (props.size < 1 ? 0 : "12px")};
`;

export const Circle = styled.View`
  width: 60px;
  height: 60px;
  background-color: #3c3c3c;
  position: absolute;
  top: -45px;
  left: 9px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
`;

export const CenterText = styled.Text`
  color: #b9b9b9;
  font-size: 16px;
`;

export const CheckItem = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CheckText = styled.Text`
  margin-left: 12px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-decoration-line: ${(props) => (props.checked ? "line-through" : "none")};
`;
