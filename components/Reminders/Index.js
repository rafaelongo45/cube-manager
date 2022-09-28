import {
  Container,
  Circle,
  CenterText,
  Reminder,
  ReminderText,
} from "./styles";
import Icon from "react-native-vector-icons/Octicons.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Reminders() {
  const [reminders, setReminders] = useState([]);

  async function searchReminders() {
    const data = await AsyncStorage.getItem("reminders");
    setReminders([...JSON.parse(data)]);
  }

  AsyncStorage.setItem(
    "reminders",
    JSON.stringify([{ name: "passear com cachorro", date: "28-09-2022" }])
  );

  useEffect(() => {
    searchReminders();
  }, []);

  return (
    <Container size={reminders.length}>
      <Circle>
        <Icon name="bell-fill" size={28} color="#fff"></Icon>
      </Circle>
      {reminders.length ? (
        reminders.map((reminder, index) => {
          return (
            <Reminder key={index}>
              <ReminderText>{reminder.name}</ReminderText>
            </Reminder>
          );
        })
      ) : (
        <CenterText>There are no reminders for today...</CenterText>
      )}
    </Container>
  );
}
