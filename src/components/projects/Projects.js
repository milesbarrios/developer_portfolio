// Imports
import React from "react";
import styled from "styled-components";

// Components

// Data
import ProjectData from "../../json-data/projects_info.json";
import Section from "../sections/Section";

const Projects = () => {
  let categories = Object.keys(ProjectData);
  return (
    <>
      <ProjectPageTitle>
        <h1 className="projectPageTitle">Projects</h1>
      </ProjectPageTitle>
      {categories.map((category) => (
        <Section
          key={category}
          category={category}
          projectData={ProjectData[category]}
        />
      ))}
    </>
  );
};

export const ProjectPageTitle = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  .projectPageTitle {
    display: flex;
    font-size: 2.2rem;
  }
`;

export default Projects;
