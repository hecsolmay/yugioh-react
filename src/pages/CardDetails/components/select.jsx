import React from "react";

export const OptionsMobile = ({ handleSelelectOption }) => {
  return (
    <div className="sm:hidden">
      <label for="tabs" className="sr-only">
        Select tab
      </label>
      <select
        onChange={(ev) => handleSelelectOption(ev.target.value)}
        id="tabs"
        className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="ilustracion">Ilustración</option>
        <option value="datos">Datos de la carta</option>
        <option value="description">Descripción</option>
      </select>
    </div>
  );
};

export const TabSelect = ({ handleSelelect, active }) => {
  const ilustracionActiveClass =
    "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500";

  const ilustracionDisableClass =
    "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300";

  const dataActive =
    "inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500";
  const dataDisable =
    "inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300";

  const descriptionActive =
    "inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500";
  const descriptionDisable =
    "inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300";
  return (
    <ul
      className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
      id="fullWidthTab"
      data-tabs-toggle="#fullWidthTabContent"
      role="tablist"
    >
      <li className="w-full">
        <button
          type="button"
          role="tab"
          onClick={() => handleSelelect("ilustracion")}
          className={
            active === "ilustracion"
              ? ilustracionActiveClass
              : ilustracionDisableClass
          }
        >
          Ilustración
        </button>
      </li>
      <li className="w-full">
        <button
          type="button"
          onClick={() => handleSelelect("datos")}
          role="tab"
          className={active === "datos" ? dataActive : dataDisable}
        >
          Datos de la carta
        </button>
      </li>
      <li className="w-full">
        <button
          type="button"
          onClick={() => handleSelelect("description")}
          role="tab"
          className={active === "description" ? descriptionActive : descriptionDisable}
        >
          Descripción
        </button>
      </li>
    </ul>
  );
};
