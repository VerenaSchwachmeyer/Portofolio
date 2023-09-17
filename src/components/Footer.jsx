import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Trans } from "react-i18next";

function Footer() {
  // const infos = [
  //   {
  //     id: "github",
  //     icon: (
  //       <a
  //         href="https://github.com/VerenaSchwachmeyer"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <FaGithub />
  //       </a>
  //     ),
  //     text: (
  //       <a
  //         className="link2Repo"
  //         href="https://github.com/VerenaSchwachmeyer"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         github.com/VerenaSchwachmeyer
  //       </a>
  //     ),
  //   },
  //   {
  //     id: "linkedin",
  //     icon: (
  //       <a
  //         href="https://de.linkedin.com/in/verena-schwachmeyer"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <FaLinkedin />
  //       </a>
  //     ),
  //     text: (
  //       <a
  //         className="link2Repo"
  //         href="https://de.linkedin.com/in/verena-schwachmeyer"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         linkedin.com/in/verena-schwachmeyer
  //       </a>
  //     ),
  //   },
  // ];

  // const infoItems = infos.map((info) => {
  //   return (
  //     <div className="info">
  //       <div className="icon">
  //         {info.link}
  //         <IconContext.Provider
  //           value={{
  //             size: "1.5em",
  //             className: "logos",
  //           }}
  //         >
  //           {info.icon}
  //         </IconContext.Provider>
  //       </div>
  //       <p>{info.text}</p>
  //     </div>
  //   );
  // });

  return (
    <footer>
      <div className="colContainer">
        <div className="col1">
          <img src="/images/VS-Logo-no-code.png" alt="" height="60px"></img>
          <p id="copyright">&copy; 2023 Copyright - Verena Schwachmeyer</p>
        </div>

        <nav className="col2">
          <h2 className="footerHeading secondary">Navigation</h2>
          <Link to="/" className="secondary">
            Home
          </Link>
          <Link to="/impressum" className="secondary">
            <Trans i18nKey="footer.sitenotice"></Trans>
          </Link>
          <Link to="/datenschutz" className="secondary">
            <Trans i18nKey="footer.dataprotection"></Trans>
          </Link>
        </nav>

        <div className="col3">
          <h2 className="footerHeading secondary">Links</h2>

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
                role="link"
                aria-label="go to LinkedIn profile"
              >
                <FaLinkedin id="footerLogos" />
              </Link>
              <Link
                reloadDocument
                to="https://github.com/VerenaSchwachmeyer"
                target="_blank"
                rel="noreferrer"
                role="link"
                aria-label="go to Github profile"
              >
                <FaGithub id="footerLogos" />
              </Link>
            </div>
          </IconContext.Provider>

          {/* <p>photo and logo by Tobias Büchner:</p>
          <Link
            reloadDocument
            to="http://dervj.de/"
            target="_blank"
            rel="noreferrer"
            className="secondary"
            role="link"
            aria-label="go to page of derVJ"
          >
            der VJ
          </Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
