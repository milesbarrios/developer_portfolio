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
          I am a developer based out of Arizona. I have experience in automation
          testing, embedded systems, and web development. I prefer to develop
          using Javascript but have experience with many different languages.
        </p>
        <StyledButton>
          <Link id="MyProjects" to="/Projects">
            My Projects
          </Link>
        </StyledButton>
      </StyledDescription>
      <StyledPortrait>
        <img src={GradPhoto} alt="Self Portrait" />
      </StyledPortrait>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  min-height: 90vh;
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
    /* color: #212121; */
  }
  p {
    font-size: 1.25rem;
    font-weight: lighter;
    color: #858585;
    /* color: #212121; */
  }
`;

const StyledPortrait = styled.div`
  flex: 1;
  padding-left: 10rem;
  padding-right: 5rem;
  overflow: hidden;
  img {
    width: 70%;
    height: 50vh;
    object-fit: cover;
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
  #MyProjects {
    text-decoration: none;
    color: #858585;
  }
  &:hover {
    background: #eb7979;
    #MyProjects {
      color: black;
    }
  }
`;

export default Home;
