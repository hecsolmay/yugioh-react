import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container rounded bg-white w-4/5 mx-auto min-h-screen ">
      <div className="pt-8 pl-8 pr-8">{children}</div>
    </div>
  );
};

export default Container;
