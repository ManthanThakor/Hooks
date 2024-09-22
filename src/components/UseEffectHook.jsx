import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  //! =============================

  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //! =============================
  //? Basic useEffect (runs on every render due to no dependency array)
  //! =============================

  useEffect(() => {
    console.log("Component rendered or re-rendered");
  });

  //! =============================
  //? useEffect with dependencies (runs when 'count' changes)
  //! =============================

  useEffect(() => {
    console.log("Effect runs when count changes");

    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);

    //! Cleanup function (optional): Cleaning up previous timeout before re-running
    return () => {
      clearTimeout(timer);
    };
  }, [count]); // Effect depends on 'count'

  //! =============================
  //? useEffect with an empty dependency array (runs only once when component mounts)
  //! =============================

  useEffect(() => {
    console.log("Component mounted, useEffect with empty dependencies");
    fetchData(); // Simulating an API call

    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty array means effect runs only on mount

  //! =============================
  //? useEffect to handle side effects like resizing
  //! =============================

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    //! Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures it runs once and sets the event listener

  //! Function to simulate fetching data (e.g., from an API)
  const fetchData = () => {
    setTimeout(() => {
      setData({ name: "React User", age: 25 });
      console.log("Data fetched");
    }, 3000);
  };

  //! =============================
  return (
    <>
      <h1>============================</h1>
      <div>I have rendered {count} times!</div>
      <h1>============================</h1>
      <div>Window width is: {windowWidth}px</div>
      <h1>============================</h1>

      {data ? (
        <div>
          Fetched data: {data.name}, {data.age} years old
        </div>
      ) : (
        <div>Loading data...</div>
      )}
      <h1>============================</h1>
    </>
  );
};

export default UseEffectHook;
