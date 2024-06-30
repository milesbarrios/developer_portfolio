import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import images
import GradPhoto from "../images/GradPhoto.jpg";

const Home = () => {
  return (
    <StyledHome>
      <StyledDescription>
        <h2>
          Hi, I'm <span>Miles</span>
        </h2>
        <p>
          I am a developer based out of Arizona. I have experience in Web
          Development, Test Automation, and Embedded Systems. My preferred
          languages are Javascript and Python, however I have 3+ years of
          experience writing in C.
        </p>
        <StyledButtons>
          <StyledButton>
            <Link id="MyProjects" to="/Projects">
              My Projects
            </Link>
          </StyledButton>
          <StyledButton>
            <Link id="MyResume" to="/Resume">
              My Resume
            </Link>
          </StyledButton>
        </StyledButtons>
      </StyledDescription>
      <StyledPortrait>
        <img src={GradPhoto} alt="Self Portrait" />
      </StyledPortrait>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 10%; /* Responsive padding */
  color: white;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  height: calc(100vh - 10vh - 60px); /* Subtract height of Nav and Footer */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    justify-content: center;
    text-align: center;
    padding: 2% 5%;
  }
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5%; /* Responsive padding */
  padding-left: 5%; /* Responsive padding */
  h2 {
    font-size: 2.5rem;
    font-weight: bolder;
    padding-bottom: 1.25rem;
    color: #ffffff;
    span {
      color: #eb7979;
    }
  }
  p {
    font-size: 1.25rem;
    font-weight: lighter;
    color: #858585;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap; /* Wrap buttons to next line if space is not enough */
`;

const StyledButton = styled.button`
  border: solid 1px #eb7979;
  background-color: #212121;
  margin: 1.75rem 0.5rem; /* Responsive margin */
  border-radius: 0.75rem;
  padding: 0.4rem 0.75rem;
  font-size: 1.25rem;
  color: #858585;
  transition: background-color 0.3s ease;

  &:hover {
    background: #eb7979;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledPortrait = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 70vh;
    max-width: 100%; /* Ensure image doesn't exceed container */
    width: auto;
    height: auto; /* Maintain aspect ratio */
    border-radius: 50%; /* Rounded image */
  }
`;

export default Home;
