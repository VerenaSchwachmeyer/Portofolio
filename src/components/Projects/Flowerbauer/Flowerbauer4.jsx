import { Trans } from "react-i18next";

export default function Flowerbauer4() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">
          <Trans i18nKey="projects.flowerbauer4H3"></Trans>
        </h4>
        <p className="slide secondary">
          <Trans i18nKey="projects.flowerbauer4text"></Trans>
        </p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/FlowerBauer4.jpg"
          alt="Suitable plants for the specified conditions are listed."
        />
      </div>
    </div>
  );
}
