import React, { useEffect, useState, useRef } from "react";
import "../style/useref.css";

const UseRefHook = () => {
  const [value, setValue] = useState(0);
  const renderCount = useRef(0);
  const inputRef = useRef(null);
  const prevValueRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.background = "red";
  };

  return (
    <div className="container">
      <input
        ref={inputRef}
        type="text"
        className="input-field"
        placeholder="Click button to focus"
      />
      <button className="button" onClick={focusInput}>
        Focus Input
      </button>

      <button className="button" onClick={() => setValue((prev) => prev - 1)}>
        -1
      </button>
      <h1 className="value-display">{value}</h1>
      <button className="button" onClick={() => setValue((prev) => prev + 1)}>
        +1
      </button>

      <h2>Previous Value: {prevValueRef.current}</h2>
      <h2>Render Count: {renderCount.current}</h2>
    </div>
  );
};

export default UseRefHook;
