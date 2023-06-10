import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link className="logo" id="logo" to="/">
          Miles Barrios
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/Contact">
            Contact
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
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: cyan;
    text-decoration: none;
  }
  h1 {
    .logo {
      text-decoration: none;
      color: white;
      font-size: 2rem;
      font-family: "Lobster", cursive;
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
  }

  .link {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
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
    position: relative;
  }
`;

export default Nav;
