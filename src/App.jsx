import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Yugioh from "./pages/Yugioh/";
import React from "react";
import CardDetails from "./pages/CardDetails/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yugi" element={<Yugioh />} />
        <Route path="/details" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
