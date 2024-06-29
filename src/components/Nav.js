import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link className="logo" id="logo" to="/" aria-label="Home">
          MB
        </Link>
      </h1>
      <ul>
        {/* <li>
          <Link className="link" to="/About" aria-label="About">
            About
          </Link>
        </li> */}
        <li>
          <Link className="link" to="/Projects" aria-label="Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/Resume" aria-label="Resume">
            Resume
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  z-index: 100;
  background: #282828;

  a {
    color: cyan;
    text-decoration: none;
  }

  h1 .logo {
    text-decoration: none;
    color: white;
    font-size: 2rem;
    font-family: "Times New Roman", Arial, Helvetica, sans-serif;
    font-weight: lighter;
    background: linear-gradient(currentColor, currentColor) bottom / 0 0em
      no-repeat;
    transition: 0.5s background-size;

    &:hover {
      color: #eb7979;
      background-size: 100% 0.1em;
      background-position: left bottom;
    }
  }

  .link {
    color: white;
    font-size: 1.35rem;
    font-weight: lighter;
    background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
      no-repeat;
    transition: 0.75s background-size;

    &:hover {
      color: #eb7979;
      background-size: 50% 0.1em;
      background-position: bottom;
    }
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 2.5rem;
  }
`;

export default Nav;
