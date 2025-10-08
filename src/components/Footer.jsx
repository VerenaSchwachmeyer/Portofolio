import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="colContainer">
        <div className="col1">
          <img src="/images/VS-Logo-no-code.webp" alt="" height="60px"></img>
          <p id="copyright">&copy; 2023 Copyright - Verena Schwachmeyer</p>
          <p>mail@schwachmeyer.dev</p>
        </div>

        <nav className="col2">
          <h2 className="footerHeading secondary">Navigation</h2>
          <Link to="/" className="secondary">
            Home
          </Link>
          <Link to="/impressum" className="secondary">
            {t("footer.sitenotice")}
          </Link>
          <Link to="/datenschutz" className="secondary">
            {t("footer.dataprotection")}
          </Link>
        </nav>

        <div className="col3">
          <h2 className="footerHeading secondary">Links</h2>

          <IconContext.Provider
            value={{
              size: "1.8em",
              className: "footerLogos",
            }}
          >
            <div className="info">
              <Link
                to="https://de.linkedin.com/in/verena-schwachmeyer"
                target="_blank"
                rel="noreferrer"
                role="link"
                aria-label="go to LinkedIn profile"
              >
                <FaLinkedin />
              </Link>
              <Link
                reloadDocument
                to="https://github.com/VerenaSchwachmeyer"
                target="_blank"
                rel="noreferrer"
                role="link"
                aria-label="go to Github profile"
              >
                <FaGithub />
              </Link>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
