import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contack from"./routes/Contack";
import Experince from "./routes/Experince";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/about"element={<About />} />
      <Route path="/project"element={<Project />} />
      <Route path="/contack"element={<Contack />} />
      <Route path="/experince"element={<Experince />} />




    </Routes>
    </>
    
  );
}

export default App;
