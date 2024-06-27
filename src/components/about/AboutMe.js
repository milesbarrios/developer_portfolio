import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <p>Software Engineer | Based in Phoenix, AZ </p>
        <ContactInfo>
          <p>
            Email:{" "}
            <a href="mailto:contact@milesbarrios.dev">
              contact@milesbarrios.dev
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/miles-barrios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/miles-barrios
            </a>
          </p>
        </ContactInfo>
      </AboutHeader>
      <AboutSection>
        <SectionTitle>Professional Journey</SectionTitle>
        <p>
          I embarked on my professional journey as a Software Engineer II at
          Microchip Inc., where I delve into designing and developing embedded
          systems applications for the Wireless Solutions Group. My focus is on
          optimizing customer application development, pioneering GUI
          enhancements with Python and C, and driving substantial revenue gains
          through module development.
        </p>
        <p>
          During my time at State Farm, my role extended across Infrastructure
          Analysis and as an Enterprise Technology Intern. I led biweekly client
          syncs, bolstered application availability via cutting-edge tools, and
          innovated with VSCode extensions.
        </p>
      </AboutSection>
      <AboutSection>
        <SectionTitle>Education & Skills</SectionTitle>
        <p>
          Armed with a Bachelor of Science in Computer Science from Northern
          Arizona University, I am proficient in Python, C, and the intricacies
          of embedded systems. My repertoire extends to Git, JavaScript, and
          REST API Development, underpinning my commitment to delivering
          innovative solutions.
        </p>
      </AboutSection>
      <AboutSection>
        <SectionTitle>Projects That Define Me</SectionTitle>
        <ProjectList>
          <li>
            <strong>Senior Capstone Project:</strong> Orchestrated a full-stack
            web application leveraging React.js and C# to empower NAU
            researchers with intuitive GUI interfaces for asteroid observations
            from the Zwicky Transient Facility.
          </li>
          <li>
            <strong>StateFarm Hackday Project:</strong> Spearheaded a React
            application for tracking GitLab code reviews across organizational
            tiers, driving operational efficiency through streamlined merge
            request monitoring.
          </li>
          <li>
            <strong>Operating System Simulator:</strong> Crafted a sophisticated
            OS simulator integrating PCB management, memory allocation, and
            concurrency principles using C, underscoring my prowess in
            system-level programming.
          </li>
        </ProjectList>
      </AboutSection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const AboutHeader = styled.header`
  text-align: left;
  margin-bottom: 30px;

  h1 {
    font-size: 2.5rem;
    color: #fff; /* Adjusted font color to complement background */
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #ccc; /* Adjusted font color to complement background */
    margin-bottom: 5px;
  }

  a {
    color: #0066cc;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #004499;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;

  p {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: #ccc; /* Adjusted font color to complement background */
  }
`;

const AboutSection = styled.section`
  margin-bottom: 30px;

  p {
    font-size: 1.1rem;
    color: #ddd; /* Adjusted font color to complement background */
    margin-bottom: 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #9a4141; /* Red color for section titles */
  margin-bottom: 15px;
`;

const ProjectList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;

  li {
    margin-bottom: 10px;
    color: #ddd; /* Adjusted font color to complement background */
  }
`;

export default AboutMe;
