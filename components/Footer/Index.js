import RenderIcon from "./RenderIcon.js";
import { useState } from "react";
import styled from "styled-components";

function FooterComponent() {
  const [iconClicked, setIconClicked] = useState("");
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
            iconClicked={iconClicked}
            setIconClicked={setIconClicked}
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
