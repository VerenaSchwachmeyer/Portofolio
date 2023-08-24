import { Trans } from "react-i18next";

export default function Downtown3() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">
          <Trans i18nKey="projects.downtown4H3"></Trans>
        </h4>
        <p className="slide1 secondary">
          <Trans i18nKey="projects.downtown4text"></Trans>
        </p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/Screenshot-Downtown-Dashboard-2.jpg"
          alt="Screenshot of website showing buttons for two chatrooms with instructions how to use them."
          style={{ objectPosition: "left top", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
