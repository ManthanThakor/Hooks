import { useState } from "react";
import "./App.css";
import UseStateHooks from "./components/UseStateHooks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseStateHooks />
    </>
  );
}

export default App;
