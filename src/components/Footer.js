import React from "react";
import styled from "styled-components";

// Components
import { Link } from "react-router-dom";

//import icons
import github from "../images/32/github32.ico";
import email from "../images/32/mail32.ico";
import linkedin from "../images/32/linked32.ico";

const Footer = () => {
  const emailAddress = "contact@milesbarrios.dev";
  const MailToLink = `mailto:${emailAddress}`;
  return (
    <StyledFooter>
      <div className="linkContainer">
        <ul>
          <li>
            <Link
              className="link"
              to={MailToLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} alt="" />
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="https://www.linkedin.com/in/miles-barrios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="https://github.com/milesbarrios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
  color: #fff;
  height: 60px;
  width: 100%;
  bottom: 0;

  .linkContainer {
    display: flex;
    margin-left: auto;
    height: 100%;
    width: 25%;
    align-items: center;
    justify-content: center;
  }

  .link {
    display: flex;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: lighter;
    &:hover {
      color: #eb7979;
      background-size: 50% 0.1em;
      background-position: bottom;
    }
    img {
      height: auto;
      flex: 1;
      width: 2rem;
    }
  }
  ul {
    display: flex;
    list-style: none;
    align-items: baseline;
  }

  li {
    padding-left: 2.5rem;
    position: relative;
  }
`;

export default Footer;
