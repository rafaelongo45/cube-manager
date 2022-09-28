import { createContext, useState } from "react";

const NavigationContext = createContext();
export default NavigationContext;

export const NavigationProvider = ({ children }) => {
  const [button, setButton] = useState("");
  const [navigation, setNavigation] = useState("");

  const values = {
    button,
    setButton,
    navigation,
    setNavigation,
  };

  return (
    <NavigationContext.Provider value={values}>
      {children}
    </NavigationContext.Provider>
  );
};
