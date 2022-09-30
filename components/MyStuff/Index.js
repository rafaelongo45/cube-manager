import styled from "styled-components/native";
import FooterComponent from "../Footer/Index";
import HeaderComponent from "../Header/Index";
import MyItemComponent from "./MyItem";

function MyStuffComponent() {
  const iconArr = [
    { name: "Checklists", iconName: "list" },
    { name: "Notes", iconName: "document-text" },
    { name: "Reminders", iconName: "alert" },
    { name: "Passwords", iconName: "key" },
  ];
  return (
    <Main>
      <HeaderComponent />
      <Text>My Stuff</Text>
      <IconsWrapper>
        {iconArr.map((icon) => {
          return (
            <MyItemComponent
              name={icon.name}
              icon={icon.iconName}
              key={icon.iconName}
            />
          );
        })}
      </IconsWrapper>
      <FooterComponent />
    </Main>
  );
}

export default MyStuffComponent;

const Main = styled.View`
  position: relative;
  display: flex;
  background-color: #2d2d2d;
  height: 100%;
`;

const Text = styled.Text`
  margin-top: 100px;
  color: white;
  align-self: center;
  font-weight: 700;
  font-size: 36px;
`;

const IconsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;
