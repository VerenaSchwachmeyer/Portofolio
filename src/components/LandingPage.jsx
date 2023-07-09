import ScrollIntoView from "react-scroll-into-view";

export default function LandingPage() {
  return (
    <div id="top" className="startpage">
      <div className="startImage">
        <div className="startpageContainer">
          {/* <img id="logo" src="/images/VS_Logo.png"></img> */}
          <div className="startTextContainer">
            <h1 className="startText" lang="de">
              {/* <VSLogo /> */}
              Verena Schwachmeyer
            </h1>

            <div className="wrapper">
              <p id="softwareDeveloper">Software Developer</p>
            </div>

            <ScrollIntoView selector="#contact">
              <button id="contactMebutton">Contact me</button>
            </ScrollIntoView>
          </div>
          <figcaption aria-hidden="true">
            Photo: Tobias Büchner | dervj.de
          </figcaption>
        </div>
      </div>
    </div>
  );
}
