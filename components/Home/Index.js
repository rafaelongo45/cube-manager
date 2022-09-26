import styled from "styled-components";
import FooterComponent from "../Footer/Index";
import HeaderComponent from "../Header/Index";

function HomeComponent() {
  return (
    <Main>
      <HeaderComponent />
      <Text>Opa sou o componente home em!</Text>
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
