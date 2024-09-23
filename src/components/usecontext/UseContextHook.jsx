import React, { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+91 22321312";
  return (
    <>
      <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
    </>
  );
};

export default ContextProvider;
