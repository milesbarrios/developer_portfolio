import React from "react";
import styled from "styled-components";

const notNone = (prop) => {
  return prop && prop.length > 0; // Ensure prop is not undefined or empty
};

const ProjectCard = ({ projectData }) => {
  const { type, title, created, lastSubmit, desc, lang, tech, githubLink } =
    projectData;

  return (
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
  );
};

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  width: 100%;
  max-width: 425px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative; /* Ensure the card uses relative positioning */
  z-index: 0; /* Start with a lower z-index to ensure cards are below other elements */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    z-index: 1; /* Increase z-index on hover to bring the card above other elements */
  }
`;

export const CardTitle = styled.h3`
  color: #eb7979; /* Red color for card titles */
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

export const CardDetails = styled.p`
  color: #555;
  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
    color: #333;
  }
`;

export const CardLink = styled.a`
  color: #9a4141;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #eb7979;
  }
`;

export const CardSectionLine = styled.div`
  background-color: #ddd;
  margin: 10px 0;
  height: 2px;
`;

export default ProjectCard;
