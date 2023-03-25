import React from "react";

const Container = ({ title = "Landig Page",children }) => {
  return (
    <div className="container rounded w-5/5 mx-auto min-h-screen ">
      <div className="pt-8 pl-8 pr-8 pb-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-gray-500">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Container;
