import React from "react";

const Datos = () => {
  return (
    <div
      className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab"
    >
      <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        We invest in the world’s potential
      </h2>
      {/* <!-- List --> */}
      <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
        <li className="flex space-x-2">
          {/* <!-- Icon --> */}
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="font-light leading-tight">
            Dynamic reports and dashboards
          </span>
        </li>
        <li className="flex space-x-2">
          {/* <!-- Icon --> */}
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="font-light leading-tight">
            Templates for everyone
          </span>
        </li>
        <li className="flex space-x-2">
          {/* <!-- Icon --> */}
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="font-light leading-tight">Development workflow</span>
        </li>
        <li className="flex space-x-2">
          {/* <!-- Icon --> */}
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="font-light leading-tight">
            Limitless business automation
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Datos;
