import React from "react";
// import styled from "styled-components";

const ResumePath = require("../documents/Miles_Barrios_Resume.pdf");

const Resume = () => {
  return (
    <>
      <iframe
        title="Resume"
        src={ResumePath}
        width="100%"
        height="775px"
      ></iframe>
    </>
  );
};

export default Resume;
