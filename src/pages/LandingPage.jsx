import React from "react";
import { FaReact, FaJs, FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import HeaderHome from "../components/HeaderHome";
import { Scroll2Element } from "../utils/functions";

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div id="top" className="startpage">
      <HeaderHome />
      <div className="startpageContainer">
        <div className="startTextContainer">
          <FaReact className="landingPageLogo" aria-label="React JS Logo" />
          <FaJs className="landingPageLogo" aria-label="JavaScript Logo" />
          <FaNode className="landingPageLogo" aria-label="Node JS Logo" />
          <GrMysql className="landingPageLogo" aria-label="MySQL Logo" />
          <h1 className="startText" lang="de">
            Verena Schwachmeyer
          </h1>

          <div className="wrapper">
            <p id="softwareDeveloper">{t("softwaredeveloper.text")}</p>
          </div>
          <div className="buttonContainer">
            <button
              id="contactMebutton"
              onClick={(e) => Scroll2Element(e, "#contact")}
            >
              {t("Buttons.contactme")}
            </button>

            <button
              id="moreInfobutton"
              onClick={(e) => Scroll2Element(e, "#services")}
            >
              {t("Buttons.moreinfo")}
            </button>
          </div>
        </div>
        <figcaption aria-hidden="true">
          <a href="https://dervj.de/" target="_blank" rel="noreferrer">
            Photo: Tobias Büchner | dervj.de
          </a>
        </figcaption>
      </div>
    </div>
  );
}
