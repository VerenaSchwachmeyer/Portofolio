import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { ImAccessibility } from "react-icons/im";
import { FaUserMd } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { Trans } from "react-i18next";

export default function Services() {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);
  const [flipped4, setFlipped4] = useState(false);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setFlipped(!flipped);
  // };

  // const handleTouchEnd = (e) => {
  //   e.preventDefault();
  //   setFlipped(false);
  //   // e.target.blur();
  // };

  return (
    <section id="services" className="section primary" aria-label="services">
      <div className="content">
        <h2 className="sectionTitle">
          <Trans i18nKey="services.heading"></Trans>
        </h2>
        <div className="serviceContainer">
          {/* Websites */}
          <div
            tabIndex="0"
            className={flipped1 ? "serviceFlipCard flip" : "serviceFlipCard"}
            onClick={() => {
              setFlipped1(!flipped1);
            }}
          >
            <div className="serviceCard" aria-label="frontside of card">
              <div
                className="serviceContent serviceCard-front primary"
                // id="serviceCard-front"
              >
                <CgWebsite className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">
                  <Trans i18nKey="services.websitesH3"></Trans>
                </h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                // id="serviceCard-back"
                aria-label="backside of card about my website services"
                tabIndex="0"
              >
                <h4>
                  <Trans i18nKey="services.websitesH4"></Trans>
                </h4>
                <ul>
                  <li>
                    <Trans i18nKey="services.websitesPoint1"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.websitesPoint2"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.websitesPoint3"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.websitesPoint4"></Trans>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Web Applications */}
          <div
            tabIndex="0"
            className={flipped2 ? "serviceFlipCard flip" : "serviceFlipCard"}
            onClick={() => {
              setFlipped2(!flipped2);
            }}
          >
            <div className="serviceCard">
              <div className="serviceContent serviceCard-front primary">
                <div>
                  <MdOutlineAppSettingsAlt className="serviceLogo graphics" />
                </div>

                <h3 className="serviceTitle graphics">
                  <Trans i18nKey="services.webappsH3"></Trans>
                </h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                tabIndex="0"
              >
                <h4>
                  <Trans i18nKey="services.webappsH4"></Trans>
                </h4>
                <ul>
                  <li>
                    <Trans i18nKey="services.webappsPoint1"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.webappsPoint2"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.webappsPoint3"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.webappsPoint4"></Trans>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accessibility */}
          <div
            tabIndex="0"
            className={flipped3 ? "serviceFlipCard flip" : "serviceFlipCard"}
            onClick={() => {
              setFlipped3(!flipped3);
            }}
          >
            <div className="serviceCard" aria-label="frontside of card">
              <div className="serviceContent serviceCard-front primary">
                <ImAccessibility className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">
                  <Trans i18nKey="services.accH3"></Trans>
                </h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                aria-label="backside of card"
                tabIndex="0"
              >
                <h4>
                  <Trans i18nKey="services.accH4"></Trans>
                </h4>
                <ul>
                  <li>
                    <Trans i18nKey="services.accPoint1"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.accPoint2"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.accPoint3"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.accPoint4"></Trans>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Medical Content */}
          <div
            tabIndex="0"
            className={flipped4 ? "serviceFlipCard flip" : "serviceFlipCard"}
            onClick={() => {
              setFlipped4(!flipped4);
            }}
            // onTouchEnd={(e) => handleTouchEnd(e)}
          >
            <div className="serviceCard" aria-label="frontside of card">
              <div className="serviceContent serviceCard-front primary">
                <FaUserMd className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">
                  <Trans i18nKey="services.medH3"></Trans>
                </h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                aria-label="backside of card"
                tabIndex="0"
              >
                <h4>
                  <Trans i18nKey="services.medH4"></Trans>
                </h4>
                <ul>
                  <li>
                    <Trans i18nKey="services.medPoint1"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.medPoint2"></Trans>
                  </li>
                  <li>
                    <Trans i18nKey="services.medPoint3"></Trans>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <p className="aboutmeText">
            Erstellung von Webseiten mit responsivem Design bis hin zur
            Entwicklung komplexerer Anwendungen inklusive Datenbank und Server.
            Eine App-Entwicklung für Android Endgeräte ist ebenfalls möglich.
            <br></br>
            Besonderen Fokus lege ich auf digitale Barrierefreiheit nach den
            Kriterien der Web Content Accessibility Guidelines (WCAG)
            beziehungsweise der BITV 2.0. Die Konformitätsstufen A, AA oder AAA
            können geprüft und eingerichtet werden. Mit meinem
            wissenschaftlichen Hintergrund kann ich bei Softwareanwendungen für
            den Gesundheitsbereich nicht nur Programmierkenntnisse, sondern auch
            medizinisches Hintergrundwissen einbringen - für die Umsetzung einer
            optimalen User Experience.
          </p> */}

          {/* Weiterführende Informationen zum Thema barrierefreie Webseiten finden Sie unter <a href="https://www.schwachmeyer-gottschalk.de"> www.schwachmeyer-gottschalk.de. </a>   */}
        </div>
      </div>
    </section>
  );
}
