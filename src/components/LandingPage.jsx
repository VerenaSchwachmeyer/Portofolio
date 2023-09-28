import { FaReact, FaJs, FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { Trans } from "react-i18next";
import HeaderHome from "./HeaderHome";
// import Lottie from "lottie-react";
// import animation_llbbxeag from "../components/Errorpage/lotties/animation_llbbxeag.json";

import ScrollIntoView from "react-scroll-into-view";

export default function LandingPage() {
  // const styles = {
  //   height: 100,
  // };

  return (
    <div id="top" className="startpage">
      <HeaderHome />
      {/* <div className="startImage"> */}
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
            <p id="softwareDeveloper">
              <Trans i18nKey="softwaredeveloper.text"></Trans>
            </p>
          </div>
          <div className="buttonContainer">
            <ScrollIntoView selector="#contact" smooth="true">
              <button id="contactMebutton">
                <Trans i18nKey="Buttons.contactme"></Trans>
              </button>
            </ScrollIntoView>
            <ScrollIntoView selector="#services" smooth="true">
              <button id="moreInfobutton">
                <Trans i18nKey="Buttons.moreinfo"></Trans>
              </button>
            </ScrollIntoView>
          </div>
          {/* <Lottie
              className="lottieArrow"
              animationData={animation_llbbxeag}
              style={styles}
            /> */}
        </div>
        <figcaption aria-hidden="true">
          Photo: Tobias Büchner | dervj.de
        </figcaption>
      </div>
      {/* </div> */}
    </div>
  );
}
