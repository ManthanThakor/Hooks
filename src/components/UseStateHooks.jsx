import React from "react";
import { useState } from "react";

const UseStateHooks = () => {
  // Basic state for color

  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("green");
  };

  //! ====================================
  // Object state

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

  //! ====================================
  // Number state

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1 above will only add 1

    //! how to update by 2
    setCount((prev) => prev + 1); //1
    setCount((prev) => prev + 1); //2
  };

  const DecreaseCount = () => {
    setCount(count > 0 ? count - 1 : count);
  };

  const resetCount = () => {
    setCount("0");
  };

  //! ===========================

  // Array state
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]); // Add new item
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
        <h1>count: {count}</h1>
        <button onClick={increaseCount}> increase by 2 </button>
        <button onClick={DecreaseCount}> Decrease</button>
        <button onClick={resetCount}> reset</button>
      </div>

      <h1>------------------</h1>

      <div>
        <h1>Items: {items.join(", ")}</h1>
        <button onClick={addItem}>Add Item</button>
      </div>
    </>
  );
};

export default UseStateHooks;
