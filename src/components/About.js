import React from "react";
import styled from "styled-components";

// Import Components
import { ProjectPageTitle } from "./projects/Projects";
import {
  SectionContainer,
  SectionTitleContainer,
  SectionLeftLine,
  SectionTitle,
  SectionRightLine,
} from "./sections/Section.js";

const About = () => {
  return (
    <>
      <ProjectPageTitle>
        <h1 className="projectPageTitle">About</h1>
      </ProjectPageTitle>
      <SectionContainer>
        <SectionTitleContainer>
          <SectionLeftLine />
          <SectionTitle> About Me</SectionTitle>
          <SectionRightLine />
        </SectionTitleContainer>
        <styledAboutSection>
          <p>Hello</p>
        </styledAboutSection>
      </SectionContainer>

      <div className="blankSpace" />
    </>
  );
};

export const styledAboutSection = styled.div`
  h3 {
    color: white;
    font-size: 2rem;
    font-weight: 10px;
  }
`;

export default About;
