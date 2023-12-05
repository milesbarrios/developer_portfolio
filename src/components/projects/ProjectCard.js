import React from "react";
import styled from "styled-components";

const notNone = (prop) => {
  return prop.length > 0;
};

const ProjectCard = ({ projectData }) => {
  const { type, title, created, lastSubmit, desc, lang, tech, githubLink } =
    projectData;
  console.log(githubLink);
  return (
    <>
      <Card>
        <CardTitle>
          <CardLink href={githubLink} target="_blank" rel="noopener noreferrer">
            {title}
          </CardLink>
        </CardTitle>
        <CardSectionLine />
        {notNone(created) && (
          <CardDetails>
            <span>Created</span>: {created}
          </CardDetails>
        )}
        {notNone(desc) && (
          <CardDetails>
            <span>Description</span>: {desc}
          </CardDetails>
        )}
        {notNone(lang) && (
          <CardDetails>
            <span>Languages</span>: {lang.join(", ")}
          </CardDetails>
        )}
        {notNone(tech) && (
          <CardDetails>
            <span>Technologies</span>: {tech.join(", ")}
          </CardDetails>
        )}
        {notNone(type) && (
          <CardDetails>
            <span>Type</span>: {type}
          </CardDetails>
        )}
        {notNone(lastSubmit) && (
          <CardDetails>
            <span>Last Submit</span>: {lastSubmit}
          </CardDetails>
        )}
      </Card>
    </>
  );
};

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 425px;
  background-color: #878787;
`;

export const CardTitle = styled.h3`
  color: #1c1c1c;
  font-weight: bolder;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

export const CardDetails = styled.p`
  color: #1a1a1a;
  span {
    font-weight: bold;
    color: black;
  }
  margin-bottom: 0.2rem;
`;

export const CardLink = styled.a`
  color: #9a4141;
  text-decoration: none;
`;

export const CardSectionLine = styled.div`
  background-color: black;
  margin-bottom: 0.75rem;
  flex-grow: 1;
  height: 3px;
`;

export default ProjectCard;
