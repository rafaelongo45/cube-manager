import { Container } from "./styles";
import Icon from "react-native-vector-icons/Fontisto.js";

export default function CheckBox({ checked, onPressFunction }) {
  return (
    <Container checked={checked} onPress={onPressFunction}>
      <Icon name="check" size={10} color="#3C3C3C" />
    </Container>
  );
}
