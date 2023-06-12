import React from "react";
import { Link } from "react-router-dom";
import VSLogo from "./VSLogo";
import ScrollIntoView from "react-scroll-into-view";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const infos = [
    {
      id: "github",
      icon: (
        <a
          href="https://github.com/VerenaSchwachmeyer"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      ),
      text: (
        <a
          className="link2Repo"
          href="https://github.com/VerenaSchwachmeyer"
          target="_blank"
          rel="noreferrer"
        >
          github.com/VerenaSchwachmeyer
        </a>
      ),
    },
    {
      id: "linkedin",
      icon: (
        <a
          href="https://de.linkedin.com/in/verena-schwachmeyer"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      ),
      text: (
        <a
          className="link2Repo"
          href="https://de.linkedin.com/in/verena-schwachmeyer"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/verena-schwachmeyer
        </a>
      ),
    },
  ];

  const infoItems = infos.map((info) => {
    return (
      <div className="info">
        <div className="icon">
          {info.link}
          <IconContext.Provider
            value={{
              size: "1.5em",
              className: "logos",
            }}
          >
            {info.icon}
          </IconContext.Provider>
        </div>
        <p>{info.text}</p>
      </div>
    );
  });

  return (
    <footer>
      <div className="colContainer">
        <div className="col1">
          <img src="/images/VS_Logo_w_code.png" height="60px"></img>
          <p id="copyright">&copy; 2023 Copyright - Verena Schwachmeyer</p>
        </div>

        <div className="col2">
          <h3>Navigation</h3>
          {/* <ScrollIntoView selector="#aboutme">
            <button
              id="footer-links"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              About Me
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#techStack">
            <button
              id="footer-links"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              Tech Stack
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#projects">
            <button
              id="footer-links"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              My Work
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#contact">
            <button
              id="footer-links"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              Contact
            </button>
          </ScrollIntoView> */}

          <Link to="/" className="footerLinks">
            <h4>Home</h4>
          </Link>
          <Link to="/impressum" className="footerLinks">
            <h4>Impressum</h4>
          </Link>
        </div>

        <div className="col3">
          <h3>Links</h3>

          <IconContext.Provider
            value={{
              size: "1.8em",
              className: "logos",
            }}
          >
            <div className="info">
              <Link
                to="https://de.linkedin.com/in/verena-schwachmeyer"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin id="footerLogos" />
              </Link>
              <Link
                to="https://github.com/VerenaSchwachmeyer"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub id="footerLogos" />
              </Link>
            </div>
          </IconContext.Provider>

          <p>photo and logo by Tobias Büchner:</p>
          <Link to="http://dervj.de/" className="footerLinks">
            <h4>der VJ</h4>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
