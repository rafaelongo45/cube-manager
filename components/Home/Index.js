import { StyleSheet } from "react-native-web";

function HomeComponent() {
  return (
    <article style={HomeStyle.wrapper}>Opa sou o componente home em!</article>
  );
}

export default HomeComponent;

const HomeStyle = StyleSheet.create({
  wrapper: {
    marginTop: 80,
    marginBottom: 80,
    color: "white",
  },
});
