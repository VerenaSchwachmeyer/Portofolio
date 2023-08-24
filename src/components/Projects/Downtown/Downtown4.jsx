import { Trans } from "react-i18next";

export default function Downtown3() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">
          <Trans i18nKey="projects.downtown3H3"></Trans>
        </h4>
        <p className="slide1 secondary">
          <Trans i18nKey="projects.downtown3text"></Trans>
        </p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/Screenshot-Downtown-Guidance.jpg"
          alt="Screenshot of website showing instructions how to log in"
          style={{ objectPosition: "left center" }}
        />
      </div>
    </div>
  );
}
