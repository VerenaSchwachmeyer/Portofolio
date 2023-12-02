import { useTranslation } from "react-i18next";

export default function Flowerbauer2() {
  const { t } = useTranslation();

  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h4 className="secondary">{t("projects.flowerbauer2H3")}</h4>
        <p className="slide secondary">{t("projects.flowerbauer2text")}</p>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/FlowerBauer2.webp"
          alt="A project can be created and named after the part of your garden for which you need plant suggestions."
        />
      </div>
    </div>
  );
}
