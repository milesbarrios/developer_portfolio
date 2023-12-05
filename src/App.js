//imports
import React from "react";
import { Routes, Route } from "react-router-dom";

//global style
import GlobalStyle from "./components/GlobalStyle";

//components
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

// Data
// import ProjectData from "./json-data/projects_info.json";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
