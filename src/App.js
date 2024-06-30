// Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Global style
import GlobalStyle from "./components/GlobalStyle";

// Components
import Home from "./components/Home";
// import About from "./components/About";
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
      <AppContainer>
        <Nav />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer_portfolio" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} /> {/* 404 Route */}
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </>
  );
}

const NotFound = () => {
  return <h2>404: Page Not Found</h2>;
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 10vh; /* Ensure content starts below the fixed Nav */
`;

export default App;
