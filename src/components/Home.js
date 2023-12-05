import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

//import images
import GradPhoto from "../images/GradPhoto.jpg";

const Home = () => {
  return (
    <StyledHome>
      <StyledDescription>
        <h2>
          What's Up, I'm <span>Miles</span>
        </h2>
        <p>
          I am a developer based out of Arizona. I have experience in Web
          Development, Test Automation, and Embedded Systems. My preferred
          languages are Javascript and Python, however I have 2+ years of
          experience writing in C.
        </p>
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
      </StyledDescription>
      {/* <StyledPortrait>
        <img src={GradPhoto} alt="Self Portrait" />
      </StyledPortrait> */}
    </StyledHome>
  );
};

const StyledHome = styled.div`
  min-height: 83.5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  padding-left: 5rem;
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

const StyledButton = styled.button`
  flex: 1;
  border-color: #eb7979;
  border-style: solid light;
  background-color: #212121;
  margin-top: 1.75rem;
  border-radius: 0.75rem;
  padding: 0.4rem 0.75rem;
  font-size: 1.25rem;
  margin-right: 2rem;
  #MyProjects {
    text-decoration: none;
    color: #858585;
  }
  #MyResume {
    text-decoration: none;
    color: #858585;
  }

  &:hover {
    background: #eb7979;
    #MyProjects {
      color: black;
    }
    #MyResume {
      color: black;
    }
  }
`;

export default Home;
