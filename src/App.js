import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Routes_Structure/NavBar";
import Form from "./component/form";
import About from "./Routes_Structure/About_us";
import Careers from "./Routes_Structure/careers";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/About" element={<About />} />
          <Route path="/Career" element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
