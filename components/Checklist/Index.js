import { Circle, Container, CenterText, CheckItem, CheckText } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons.js";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CheckBox from "../CheckBox/Index";

export default function Checklist() {
  const [checklist, setChecklist] = useState([]);

  async function searchChecklist() {
    const data = await AsyncStorage.getItem("checklist");
    if(data) setChecklist([...JSON.parse(data)]);
  }

  function onPressFunction(name) {
    checklist.forEach((checkitem) => {
      if (checkitem.name === name) checkitem.done = !checkitem.done;
    });
    setChecklist([...checklist]);
    AsyncStorage.setItem("checklist", JSON.stringify([...checklist]));
  }

  useEffect(() => {
    const promisse = searchChecklist();
  }, []);

  return (
    <Container size={checklist.length}>
      <Circle>
        <Icon name="playlist-add-check" size={36} color="#fff" />
      </Circle>
      {!checklist.length ? (
        <CenterText>Looks like you don't have checklists yet</CenterText>
      ) : (
        checklist.map((checkitem, index) => {
          return (
            <CheckItem key={index}>
              <CheckBox
                checked={checkitem.done}
                onPressFunction={() => onPressFunction(checkitem.name)}
              />
              <CheckText checked={checkitem.done}>{checkitem.name}</CheckText>
            </CheckItem>
          );
        })
      )}
    </Container>
  );
}
