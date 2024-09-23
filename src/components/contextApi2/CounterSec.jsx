import React from "react";
import { useCounter } from "./CounterContext";

const CounterSec = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <div>
        <h1> count: {count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </>
  );
};

export default CounterSec;
