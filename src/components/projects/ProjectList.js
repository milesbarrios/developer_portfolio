import React from "react";
import styled from "styled-components";

// Components
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, projectData }) => {
  return (
    <>
      <ProjectsListContainer>
        {projects.map((project) => (
          <ProjectCard key={project} projectData={projectData[project]} />
        ))}
      </ProjectsListContainer>
    </>
  );
};

export const ProjectsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default ProjectList;
