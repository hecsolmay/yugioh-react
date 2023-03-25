import React, { lazy } from "react";

const Ilustracion = ({ imageCropped, name, description}) => {
  return (
    <div className="text-center p-4 pt-5 pb-5 grid bg-white rounded-lg md:p-8 dark:bg-gray-800 content-center items-center self-center">
      <div style={{ margin: "auto" }}>
        <h2 className="text-white mb-5">{name}</h2>

        {imageCropped && (
          <img
            src={imageCropped}
            className="mb-5"
            alt="imagen de la carta"
            style={{ width: "350px", height: "auto",margin: "auto"}}
            loading={lazy}
          />
        )}
        <p className="text-neutral-300 text-center mt-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Ilustracion;
