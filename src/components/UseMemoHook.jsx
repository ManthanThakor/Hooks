import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("calculation done !");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]);

  return (
    <>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
        />
        <h1>cube of the number: {result}</h1>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          counter ++
        </button>
        <h1>{counter}</h1>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          counter --
        </button>
      </div>
    </>
  );
};

export default UseMemoHook;
