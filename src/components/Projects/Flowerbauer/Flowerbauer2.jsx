import { Trans } from "react-i18next";

export default function Flowerbauer2() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">
          <Trans i18nKey="projects.flowerbauer2H3"></Trans>
        </h4>
        <p className="slide secondary">
          <Trans i18nKey="projects.flowerbauer2text"></Trans>
        </p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/FlowerBauer2.jpg"
          alt="A project can be created and named after the part of your garden for which you need plant suggestions."
        />
      </div>
    </div>
  );
}
