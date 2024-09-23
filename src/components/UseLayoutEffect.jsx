import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("message from useEffect");
  }); //! best to use  useEffect

  useLayoutEffect(() => {
    console.log("message from useLayoutEffect");
  }); //! it will display first
  //  ------------------
  const [boxHeight, setBoxHeight] = useState(100);
  const boxRef = useRef();

  useLayoutEffect(() => {
    //? Measure the width of the box and set the height before painting
    const boxWidth = boxRef.current.offsetWidth;
    setBoxHeight(boxWidth / 2); //? Set the height as half the width
    //? Cleanup function (if necessary)
    return () => {
      //? You can reset things if needed
    };
  }, []); //? Empty dependency array, so it runs only once after initial mount

  return (
    <>
      <div>
        <h2>test message</h2>
        {Array(40)
          .fill("text")
          .map((item, index) => (
            <li key={index}>{item + index}</li>
          ))}
      </div>
      <h1>------------------------</h1>
      <div>
        <div
          ref={boxRef}
          style={{
            width: "100%",
            height: `${boxHeight}px`,
            backgroundColor: "lightblue",
          }}
        >
          This box's height is half its width
        </div>
      </div>
    </>
  );
};

export default UseLayoutEffect;
