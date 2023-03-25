import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container title="Inicio">
      <div className="mt-5">
        <div className="flex space-x-2 w-full shadow-md rounded-lg overflow-hidden mx-auto mt-5 mb-5">
          <div className="card  min-w-sm border border-gray-700 bg-gray-700 text-gray-50 m-auto  transition-shadow shadow-xl hover:shadow-xl min-w-max">
            <div className="w-full card__media">
              <img
                src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg"
                className="h-48 w-96"
              />
            </div>

            <div className="flex items-center p-4">
              <div className="relative flex flex-col items-center w-full">
                <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end "></div>
                <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                    Hector David Solis May
                  </span>
                  <div className="mt-4">
                    <p className="text-sm text-gray-200">
                      Consumo de api de yugioh
                    </p>
                  </div>
                  <div className="py-2 flex space-x-2">
                    <a
                      href="https://github.com/hecsolmay/yugioh-react"
                      target="_blank"
                    >
                      <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-400 text-purple-400 hover:border-purple-800 hover:border-purple-500 px-4 py-1 flex items-center hover:shadow-lg">
                        <span className="mr-2"></span>GITHUB
                        <span className="ml-2"></span>
                      </button>
                    </a>
                    <Link to="/yugi">
                      <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                        YUGIWIKI <span className="ml-2"></span>
                      </button>
                    </Link>
                  </div>
                  <div className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                    <span className="text-center px-2">
                      <span className="font-bold text-gray-50">5°</span>
                      <span className="text-gray-100">Cuatrimestre</span>
                    </span>
                    <span className="text-center px-2">
                      <span className="font-bold text-gray-50">Grupo</span>
                      <span className="text-gray-100"> A</span>
                    </span>
                    <span className="text-center px-2">
                      <span className="text-gray-100"> APLWPI4</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
