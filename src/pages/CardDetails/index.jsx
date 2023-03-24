import React, { useState } from "react";
import Container from "../../components/Container";
import Datos from "./components/Datos";
import Description from "./components/Description";
import Ilustracion from "./components/Ilustracion";
import { OptionsMobile, TabSelect } from "./components/select";

const CardDetails = () => {
  const [tab, setTab] = useState("ilustracion");

  const handleSelelect = (selectTab) => {
    console.log(selectTab);
    setTab(selectTab);
  };

  const handleSelelectOption = (value) => {
    console.log(value);
    setTab(value);
  };
  return (
    <Container>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div
          id="fullWidthTabContent"
          className="border-t border-gray-200 dark:border-gray-600"
        >
          <OptionsMobile handleSelelectOption={handleSelelectOption} />
          <TabSelect handleSelelect={handleSelelect} active={tab} />
          <Datos />
        </div>
      </div>
    </Container>
  );
};

export default CardDetails;
