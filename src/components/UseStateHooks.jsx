import React from "react";
import { useState } from "react";

const UseStateHooks = () => {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("green");
  };

  //! ====================================

  const [car, setCar] = useState({
    brand: "ferrari",
    model: "roma",
    year: "2024",
    color: "red",
  });

  const changeColor2 = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };
  return (
    <>
      <div>
        <h1>My favorite color is {color}</h1>
        <button onClick={changeColor}>blue</button>
      </div>
      <h1>------------------</h1>
      <div>
        <h1>my {car.brand}</h1>
        <h1>
          it us a {car.color} {car.model} from {car.year}
        </h1>
        <button onClick={changeColor2}>bLUE</button>
      </div>
      <h1>------------------</h1>
      <div>
        <h1>count: 0</h1>
      </div>
    </>
  );
};

export default UseStateHooks;
