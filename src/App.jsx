import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Yugioh from "./pages/Yugioh/";
import React from "react";
import CardDetails from "./pages/CardDetails/";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yugi" element={<Yugioh />} />
          <Route path="/details/:id" element={<CardDetails />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
