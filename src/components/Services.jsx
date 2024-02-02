import { useState } from "react";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { ImAccessibility } from "react-icons/im";
import { FaUserMd } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
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
        <h2 className="sectionTitle">{t("services.heading")}</h2>
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
                  {t("services.websitesH3")}
                </h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                // id="serviceCard-back"
                aria-label="backside of card about my website services"
                tabIndex="0"
              >
                <h4>{t("services.websitesH4")}</h4>
                <ul>
                  <li>{t("services.websitesPoint1")}</li>
                  <li>{t("services.websitesPoint2")}</li>
                  <li>{t("services.websitesPoint3")}</li>
                  <li>{t("services.websitesPoint4")}</li>
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
                  {t("services.webappsH3")}
                </h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                tabIndex="0"
              >
                <h4>{t("services.webappsH4")}</h4>
                <ul>
                  <li>{t("services.webappsPoint1")}</li>
                  <li>{t("services.webappsPoint2")}</li>
                  <li>{t("services.webappsPoint3")}</li>
                  <li>{t("services.webappsPoint4")}</li>
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
                <h3 className="serviceTitle graphics">{t("services.accH3")}</h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                aria-label="backside of card"
                tabIndex="0"
              >
                <h4>{t("services.accH4")}</h4>
                <ul>
                  <li>{t("services.accPoint1")}</li>
                  <li>{t("services.accPoint2")}</li>
                  <li>{t("services.accPoint3")}</li>
                  <li>{t("services.accPoint4")}</li>
                </ul>
                <Link
                  title="Link to my affiliate website www.webseiten-barrierefrei.de"
                  className="button secondary"
                  to="https://webseiten-barrierefrei.de"
                  target="_blank"
                  style={{
                    margin: "15px",
                    padding: "8px 15px",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Details
                </Link>
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
                <h3 className="serviceTitle graphics">{t("services.medH3")}</h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                aria-label="backside of card"
                tabIndex="0"
              >
                <h4>{t("services.medH4")}</h4>
                <ul>
                  <li>{t("services.medPoint1")}</li>
                  <li>{t("services.medPoint2")}</li>
                  <li>{t("services.medPoint3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="aboutmeText">{t("services.p1")}</p>
          <h3 className="primary" style={{ marginTop: "20px", padding: 0 }}>
            {t("services.accwebsitesh3")}
          </h3>
          <p className="aboutmeText">
            {t("services.p2")}{" "}
            <Link
              className="inlineLink"
              to="https://webseiten-barrierefrei.de/barrierefreiheit"
              target="_blank"
            >
              www.webseiten-barrierefrei.de
            </Link>
          </p>

          {/* Weiterführende Informationen zum Thema barrierefreie Webseiten finden Sie unter <a href="https://www.schwachmeyer-gottschalk.de"> www.schwachmeyer-gottschalk.de. </a>   */}
        </div>
      </div>
    </section>
  );
}
