import { Trans } from "react-i18next";

export default function Flowerbauer1() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h3 className="secondary">
          <Trans i18nKey="projects.flowerbauer1H3"></Trans>
        </h3>
        <p className="slide1 secondary">
          <Trans i18nKey="projects.flowerbauer1text"></Trans>
        </p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/FlowerBauer-Landingpage2.jpg"
          alt="Startpage of the app Flower Bauer with a purple background and a flower icon."
        />
      </div>
    </div>
  );
}
