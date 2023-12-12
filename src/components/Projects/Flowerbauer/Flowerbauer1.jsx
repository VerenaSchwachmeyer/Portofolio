import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Flowerbauer1() {
  const { t } = useTranslation();
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h3 className="secondary">{t("projects.flowerbauer1H3")}</h3>
        <p className="slide1 secondary">{t("projects.flowerbauer1text")}</p>
        <Link
          to="https://flowerbauer.app/"
          target="blank"
          rel="noreferrer"
          className="buttonLinks secondary"
          aria-label="Link to FlowerBauer"
        >
          Visit Website
        </Link>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/Screenshot_FlowerBauer_2.webp"
          alt="Startpage of the app Flower Bauer with a purple background and a flower icon."
        />
      </div>
    </div>
  );
}
