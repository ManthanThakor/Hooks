import React from "react";
import UseLocalStorage from "./hooks/UseLocalStorage";

const CustomHook = () => {
  const [name, setName] = UseLocalStorage("username", "");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name || "stranger"}!</h2>
    </div>
  );
};

export default CustomHook;
