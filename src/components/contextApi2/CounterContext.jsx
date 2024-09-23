import React, { useContext, createContext, useState } from "react";

//! Create context

const CounterContext = createContext();

//! provide Component

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to use the CounterContext

export const useCounter = () => {
  return useContext(CounterContext);
};
