import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fetchGitHubProjects from "./FetchProjDetails";
import Section from "../sections/Section";

const Projects = () => {
  const [projectsData, setProjectsData] = useState({ projects: [], orgs: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGitHubProjects();
      setProjectsData(data);
    };

    fetchData();
  }, []);

  const { projects, orgs } = projectsData;

  return (
    <ProjectsContainer>
      {Array.isArray(projects) && projects.length > 0 && (
        <>
          <Section
            category="Public"
            projectData={projects.filter((proj) => proj.type === "Public")}
          />
          {Array.isArray(orgs) && orgs.length > 0 && (
            <Section
              category="Private"
              projectData={projects.filter((proj) => proj.type === "Private")}
            />
          )}
        </>
      )}
      {Array.isArray(orgs) && orgs.length > 0 && (
        <Section category="Orgs" projectData={orgs} />
      )}
      <div className="blankSpace" />
    </ProjectsContainer>
  );
};

export const ProjectsContainer = styled.div`
  /* Your styles here */
`;

export const ProjectPageTitle = styled.div`
  /* Your styles here */
`;

export default Projects;
