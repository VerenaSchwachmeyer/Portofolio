import { useTranslation } from "react-i18next";

export default function Flowerbauer3() {
  const { t } = useTranslation();

  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">{t("projects.flowerbauer3H3")}</h4>
        <p className="slide secondary">{t("projects.flowerbauer3text")}</p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/FlowerBauer3.webp"
          alt="The properties of the garden area can be selected: sunlight, water level, soil etc."
        />
      </div>
    </div>
  );
}
