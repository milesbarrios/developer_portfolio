import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Example: FontAwesome icons

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
              <FaEnvelope />
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="https://www.linkedin.com/in/miles-barrios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="https://github.com/milesbarrios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
  color: #fff;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;

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
    font-size: 1.6rem;
    font-weight: lighter;
    margin: 0 10px; /* Adjust as needed */
    transition: color 0.3s;

    &:hover {
      color: #eb7979;
    }
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
`;

export default Footer;
