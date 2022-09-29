import { useContext, useEffect } from "react";
import styled from "styled-components";
import NavigationContext from "../../contexts/NavigationContext";
import Checklist from "../Checklist/Index";
import FooterComponent from "../Footer/Index";
import HeaderComponent from "../Header/Index";
import Reminders from "../Reminders/Index";

function HomeComponent({ navigation }) {
  const { setNavigation } = useContext(NavigationContext);
  useEffect(() => setNavigation(navigation), []);
  return (
    <Main>
      <HeaderComponent />
      <Reminders />
      <Checklist />
      <FooterComponent />
    </Main>
  );
}

export default HomeComponent;

const Main = styled.View`
  position: relative;
  display: flex;
  background-color: #2d2d2d;
  height: 100%;
`;

const Text = styled.Text`
  margin: 80px 0;
  color: white;
`;
