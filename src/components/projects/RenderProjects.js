import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard"; // Adjust the import path as needed
import fetchGitHubProjects from "./fetchGitHubProjects"; // Adjust the import path as needed

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projectData = await fetchGitHubProjects();
      setProjects(projectData);
    };

    getProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.title} projectData={project} />
      ))}
    </div>
  );
};

export default Projects;
