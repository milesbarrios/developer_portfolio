import React from "react";
import styled from "styled-components";

// components
import ProjectList from "../projects/ProjectList";

const Section = ({ category, projectData }) => {
  let projects = Object.keys(projectData);
  return (
    <>
      <SectionContainer>
        <SectionTitleContainer>
          <SectionLeftLine />
          <SectionTitle>{category} Projects</SectionTitle>
          <SectionRightLine />
        </SectionTitleContainer>
      </SectionContainer>
      <ProjectList projects={projects} projectData={projectData} />
    </>
  );
};

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 3rem;
`;

export const SectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SectionLine = styled.div`
  flex-grow: 1;
  height: 3px;
  background-color: #ddd;
`;

export const SectionLeftLine = styled.div`
  flex-shrink: 0;
  height: 3px;
  width: 20vh;
  background-color: #585858;
`;

export const SectionRightLine = styled.div`
  flex-grow: 1;
  height: 3px;
  background-color: #585858;
`;

export const SectionTitle = styled.h2`
  margin: 0 10px;
  color: #eb7979;
  font-size: 1.6rem;
  margin-top: 0.5rem;
`;

export default Section;
