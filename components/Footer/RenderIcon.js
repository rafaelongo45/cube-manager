import { StyleSheet } from "react-native-web";
import Icon from "react-native-vector-icons/Ionicons.js"
import { View } from "react-native";


function RenderIcon({ circle, stringName, iconClicked, setIconClicked }) {
  function setClickedStyle() {
    return iconClicked === stringName
      ? footerStyles.iconWrapper && footerStyles.selected
      : footerStyles.empty;
  }
  return (
    <View
      style={circle ? footerStyles.circle : setClickedStyle()}
      onClick={() => {
        setIconClicked(stringName);
      }}
    >
      <Icon name={stringName} size={35} color="#fff"/>
    </View>
  );
}
export default RenderIcon;

{
  /* <article style={footerStyles.wrapper}>
      <div style={footerStyles.iconWrapper}>
        <IoHome style={footerStyles.icon} />
      </div>
      <div style={footerStyles.circle}>
        <FiPlus style={footerStyles.plusIcon} />
      </div>
      <div style={footerStyles.iconWrapper}>
        <IoCube style={footerStyles.icon} />
      </div>
    </article> */
}

const footerStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: 80,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3C3C3C",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  circle: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: -45,
    width: 65,
    height: 65,
    left: "40%",
    borderRadius: 50,
    backgroundColor: "#3C3C3C",
  },

  icon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 37,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },

  plusIcon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 45,
    position: "absolute",
    top: 8,
  },

  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  selected: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 25,
  },

  empty: {},
});
