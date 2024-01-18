import { Trans } from "react-i18next";

export default function Downtown2() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">
          <Trans i18nKey="projects.downtown2H3"></Trans>
        </h4>
        <p className="slide1 secondary">
          <Trans i18nKey="projects.downtown2text"></Trans>
        </p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/Laptop-Downtown-Dashboard.webp"
          alt="Screenshot showing the user dashboard with accessible features."
          style={{ objectPosition: "left" }}
        />
      </div>
    </div>
  );
}
