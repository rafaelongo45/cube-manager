import Icon from "react-native-vector-icons/Ionicons.js";
import styled from "styled-components/native";

function NewIcons() {
  const iconArr = [
    { circle: true, stringName: "list" },
    { circle: true, stringName: "document-text" },
    { circle: true, stringName: "alarm" },
    { circle: true, stringName: "key" },
  ];

  return (
    <>
      <IconsWrapper>
        {iconArr.map((iconObject) => {
          return (
            <IconWrapper circle={iconObject.circle} key={iconObject.stringName}>
              <Icon
                name={iconObject.stringName}
                size={iconObject.circle ? 45 : 35}
                color="#fff"
              />
            </IconWrapper>
          );
        })}
      </IconsWrapper>
    </>
  );
}
export default NewIcons;

const IconsWrapper = styled.View`
  position: absolute;
  bottom: 60px;
  left: calc(50vw - 200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 400px;
  height: 70px;
  background-color: transparent;
`;

const IconWrapper = styled.View`
  position: ${({ circle }) => (circle ? "relative" : "static")};
  top: ${({ circle }) => (circle ? "-100px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ circle }) => (circle ? "70px" : "11%")};
  border-radius: ${({ circle }) => (circle ? "50px" : "16px")};
  height: ${({ circle }) => (circle ? "70px" : "50px")};
  background-color: #3c3c3c;
`;
