import React, { useState, useCallback, useEffect } from "react";
import Header from "../component2/Header";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  const [messages, setMessages] = useState([]);

  //! useCallback to update count dynamically based on 'incrementBy' state
  const updateValue = useCallback(() => {
    setCount((prev) => prev + incrementBy);
  }, [incrementBy]); // Re-creates the function only when 'incrementBy' changes

  //! Memoized callback to add a new message
  const addMessage = useCallback(() => {
    setMessages((prevMessages) => [...prevMessages, `New message ${count}`]);
  }, [count]); // Re-creates the function only when 'count' changes

  //! A memoized function passed to Header component to prevent re-renders of Header
  const newFn = useCallback(() => {
    console.log("Function passed to Header component");
  }, []);

  // Effect to log when a new message is added
  useEffect(() => {
    if (messages.length > 0) {
      console.log("New message added:", messages[messages.length - 1]);
    }
  }, [messages]);

  return (
    <>
      <Header newFn={newFn} />
      <h1>Count: {count}</h1>

      {/* Button to increment count dynamically */}
      <button onClick={updateValue}>Increment by {incrementBy}</button>

      {/* Changing the increment value */}
      <input
        type="number"
        value={incrementBy}
        onChange={(e) => setIncrementBy(Number(e.target.value))}
        style={{ margin: "10px 0" }}
      />

      {/* Adding new messages */}
      <button onClick={addMessage}>Add Message</button>

      {/* Display messages */}
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </>
  );
};

export default UseCallbackHook;
