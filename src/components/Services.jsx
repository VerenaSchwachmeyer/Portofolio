import { useState } from "react";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { ImAccessibility } from "react-icons/im";
import { FaUserMd } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const [cards, flipCards] = useState([false, false, false, false]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setFlipped(!flipped);
  // };

  // const handleTouchEnd = (e) => {
  //   e.preventDefault();
  //   setFlipped(false);
  //   // e.target.blur();
  // };
  const data = [
    {
      id: 0,
      titleFront: t("services.websitesH3"),
      titleBack: t("services.websitesH4"),
      list: [
        {
          item: t("services.websitesPoint1"),
        },
        { item: t("services.websitesPoint2") },
        { item: t("services.websitesPoint3") },
        { item: t("services.websitesPoint4") },
      ],
      logo: <CgWebsite className={`serviceLogo graphics`} />,
      details: false,
    },
    {
      id: 1,
      titleFront: t("services.webappsH3"),
      titleBack: t("services.webappsH4"),
      list: [
        {
          item: t("services.webappsPoint1"),
        },
        { item: t("services.webappsPoint2") },
        { item: t("services.webappsPoint3") },
        { item: t("services.webappsPoint4") },
      ],
      logo: <MdOutlineAppSettingsAlt className={`serviceLogo graphics`} />,
      details: false,
    },
    {
      id: 2,
      titleFront: t("services.accH3"),
      titleBack: t("services.accH4"),
      list: [
        {
          item: t("services.accPoint1"),
        },
        { item: t("services.accPoint2") },
        { item: t("services.accPoint3") },
        { item: t("services.accPoint4") },
      ],
      logo: <ImAccessibility className={`serviceLogo graphics`} />,
      details: true,
    },
    {
      id: 3,
      titleFront: t("services.medH3"),
      titleBack: t("services.medH4"),
      list: [
        {
          item: t("services.medPoint1"),
        },
        { item: t("services.medPoint2") },
        { item: t("services.medPoint3") },
      ],
      logo: <FaUserMd className={`serviceLogo graphics`} />,
      details: false,
    },
  ];

  return (
    <section id="services" className="section primary" aria-label="services">
      <div className="content">
        <h2 className="sectionTitle">{t("services.heading")}</h2>
        <div className="serviceContainer">
          {data &&
            data.map((card, index) => {
              return (
                <div
                  key={card.id}
                  tabIndex="0"
                  className={
                    cards[index] ? "serviceFlipCard flip" : "serviceFlipCard"
                  }
                  onClick={() => {
                    flipCards(!cards[card.id]);
                  }}
                >
                  <div className="serviceCard" aria-label="frontside of card">
                    <div className={`serviceContent serviceCard-front primary`}>
                      {card.logo}
                      <h3 className={`serviceTitle graphics`}>
                        {card.titleFront}
                      </h3>
                    </div>

                    <div
                      className={`serviceContent serviceCard-back secondary`}
                      aria-label="backside of card about my website services"
                      tabIndex="0"
                    >
                      <h4>{card.titleBack}</h4>
                      <ul>
                        {card.list &&
                          card.list.map((listitem, index) => {
                            return <li>{listitem.item}</li>;
                          })}
                      </ul>
                      {card.details && (
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
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
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
