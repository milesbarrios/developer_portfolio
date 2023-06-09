import React from "react";
import { styled } from "styled-components";

//import images
import placeholder from "../images/placeholder.jpg";

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
      </StyledDescription>
      <StyledPortrait>
        <img src={placeholder} alt="Self Portrait" />
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
  h2 {
    font-weight: bolder;
    padding-bottom: 1.25rem;
    /* color: #ffffff; */
    color: black;
  }
  p {
    font-weight: lighter;
    /* color: #858585; */
    color: black;
  }
`;

const StyledPortrait = styled.div`
  flex: 1;
  padding-right: 5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default Home;
