import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${(props) => (props.size < 1 ? 80 : 75 * props.size)}px;
  margin-top: 180px;
  border-radius: 18px;
  background-color: #3c3c3c;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: ${(props) => (props.size < 1 ? 0 : "16px")};
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

export const Reminder = styled.View`
  width: 350px;
  height: 45px;
  border-radius: 8px;
  background-color: white;
  justify-content: center;
  margin-bottom: 18px;
  padding-left: 11px;
`;

export const ReminderText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  display: flex;
`;
