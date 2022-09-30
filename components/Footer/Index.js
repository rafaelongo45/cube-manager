import RenderIcon from "./RenderIcon.js";
import styled from "styled-components/native";

function FooterComponent() {
  const iconArr = [
    { circle: false, stringName: "home-sharp" },
    { circle: true, stringName: "add" },
    { circle: false, stringName: "file-tray-sharp" },
  ];
  return (
    <Main>
      {iconArr.map((iconObject) => {
        return (
          <RenderIcon
            key={iconObject.stringName}
            circle={iconObject.circle}
            stringName={iconObject.stringName}
          />
        );
      })}
    </Main>
  );
}
export default FooterComponent;

const Main = styled.View`
  position: absolute;
  width: 100%;
  height: 80px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #3c3c3c;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
