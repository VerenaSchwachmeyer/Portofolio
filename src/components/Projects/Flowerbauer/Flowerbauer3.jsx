import { Trans } from "react-i18next";

export default function Flowerbauer3() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">
          <Trans i18nKey="projects.flowerbauer3H3"></Trans>
        </h4>
        <p className="slide secondary">
          <Trans i18nKey="projects.flowerbauer3text"></Trans>
        </p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/FlowerBauer3.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
