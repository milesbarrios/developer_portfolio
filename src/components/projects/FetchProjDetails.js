import axios from "axios";

const GITHUB_TOKEN = process.env.REACT_APP_DEV_PORT_GITHUB_TOKEN;
const USERNAME = "milesbarrios";

const fetchGitHubProjects = async () => {
  try {
    // Define headers conditionally
    const headers = GITHUB_TOKEN
      ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
      : {};

    // Fetch repositories
    const reposUrl = GITHUB_TOKEN
      ? "https://api.github.com/user/repos"
      : `https://api.github.com/users/${USERNAME}/repos`;
    const reposResponse = await axios.get(reposUrl, { headers });

    // Fetch organizations (only if token is available)
    let orgsResponse = { data: [] };
    if (GITHUB_TOKEN) {
      orgsResponse = await axios.get("https://api.github.com/user/orgs", {
        headers,
      });
    }

    // Fetch detailed repository information including languages used
    const projectsPromises = reposResponse.data
      .filter((repo) => {
        const projectName = repo.name.toLowerCase();
        return (
          !projectName.startsWith("cs") &&
          !projectName.startsWith("db") &&
          !projectName.includes("ceres") &&
          !projectName.includes("wifi") &&
          projectName !== "project-website"
        );
      })
      .map(async (repo) => {
        try {
          const languagesResponse = await axios.get(repo.languages_url, {
            headers,
          });

          const languagesUsed = Object.keys(languagesResponse.data);

          return {
            type: repo.private ? "Private" : "Public",
            title: repo.name,
            created: new Date(repo.created_at).toLocaleDateString(),
            lastSubmit: new Date(repo.updated_at).toLocaleDateString(),
            desc: repo.description,
            lang: languagesUsed,
            tech: [], // You can add technologies if needed
            githubLink: repo.html_url,
          };
        } catch (error) {
          console.error(`Error fetching languages for ${repo.name}:`, error);
          return null; // Return null for projects with fetching errors
        }
      });

    // Await all promises to resolve
    const projects = await Promise.all(projectsPromises);

    // Remove projects that had errors
    const filteredProjects = projects.filter((project) => project !== null);

    // Sort projects by type (Public first) and then by most recent lastSubmit date
    filteredProjects.sort((a, b) => {
      if (a.type === b.type) {
        return new Date(b.lastSubmit) - new Date(a.lastSubmit);
      }
      if (a.type === "Public") return -1;
      return 1;
    });

    // Map organizations (if token is available)
    const orgs = orgsResponse.data.map((org) => ({
      title: org.login,
      desc: org.description,
      githubLink: `https://github.com/orgs/${org.login}/repositories`,
    }));

    return { projects: filteredProjects, orgs };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return { projects: [], orgs: [] };
  }
};

export default fetchGitHubProjects;
