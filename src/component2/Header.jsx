import React from "react";

const Header = () => {
  console.log("header");
  return (
    <>
      <div>header</div>
    </>
  );
};

export default React.memo(Header); // with this it will not rerender again
