import { useState } from "react";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

function PasswordModal({ setIsOpen }) {
  const [inputData, setInputData] = useState({
    title: "",
    url: "",
    password: "",
  });

  function saveData() {
    AsyncStorage.setItem(
      `password ${inputData.title}`,
      JSON.stringify(inputData)
    );
    setIsOpen(false);
  }
  return (
    <InputWrapper>
      <Input
        placeholder={"Title"}
        value={inputData.title}
        onChangeText={(e) => setInputData({ ...inputData, title: e })}
      />
      <Input
        placeholder={"URL"}
        value={inputData.url}
        onChangeText={(e) => setInputData({ ...inputData, url: e })}
      />
      <Input
        placeholder={"Password"}
        value={inputData.password}
        onChangeText={(e) => setInputData({ ...inputData, password: e })}
      />

      <Button onPress={() => saveData()}>
        <Text>Save</Text>
      </Button>
    </InputWrapper>
  );
}

export default PasswordModal;

const InputWrapper = styled.View`
  position: relative;
  width: 90%;
  height: 81%;
  margin: 0 auto;
`;

const Input = styled.TextInput`
  background-color: white;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 12px;
  padding-left: 10px;
`;

const Button = styled.Pressable`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  align-self: center;
  bottom: 0;
  background-color: #6d6d6d;
  width: 30%;
  height: 8%;
`;

const Text = styled.Text`
  color: white;
  font-weight: 700;
`;
