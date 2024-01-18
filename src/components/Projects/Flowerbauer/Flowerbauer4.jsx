import { useTranslation } from "react-i18next";

export default function Flowerbauer4() {
  const { t } = useTranslation();
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">{t("projects.flowerbauer4H3")}</h4>
        <p className="slide secondary">{t("projects.flowerbauer4text")}</p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/FlowerBauer4.webp"
          alt="Suitable plants for the specified conditions are listed."
          style={{ objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
