import React from "react";
import styled from "styled-components";

const ResumePath = require("../documents/Resume_Miles_Barrios.pdf");

const Resume = () => {
  return (
    <ResumeContainer>
      <iframe
        title="Resume"
        src={ResumePath}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  height: calc(
    100vh - (60px + 10vh)
  ); /* Adjust as per your header and footer heights */
`;

export default Resume;
