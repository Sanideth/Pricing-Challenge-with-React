import React, { useState } from "react";

const ToggleContext = React.createContext();

const ToggleContextProvider = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleData = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <ToggleContext.Provider value={{ toggle, toggleData }}>
      {props.children}
    </ToggleContext.Provider>
  );
};

export { ToggleContextProvider, ToggleContext };
