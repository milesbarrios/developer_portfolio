import React from "react";
import styled from "styled-components";
import AboutMe from "./about/AboutMe";

import {
  SectionLeftLine,
  SectionTitle,
  SectionRightLine,
} from "./sections/Section.js";

const About = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitleContainer>
          <SectionLeftLine />
          <SectionTitle>About Me</SectionTitle>
          <SectionRightLine />
        </SectionTitleContainer>
        <AboutMeContainer>
          <AboutMe />
        </AboutMeContainer>
      </SectionContainer>
      <div className="blankSpace" />
    </>
  );
};

const SectionContainer = styled.div``;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0rem;
  margin-bottom: 20px;
`;

const AboutMeContainer = styled.div`
  max-width: 800px;
`;

export default About;
