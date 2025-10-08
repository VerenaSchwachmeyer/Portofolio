import { useTranslation } from "react-i18next";

export default function DerVJ1() {
  const { t } = useTranslation();
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h3 className="secondary">der VJ</h3>
        <p className="slide1 secondary">{t("projects.linovtext")}</p>
        <a
          href="https://dervj.de"
          target="blank"
          className="buttonLinks secondary"
          aria-label="Link to derVJ Webseite"
        >
          {t("Buttons.visitWebsite")}
        </a>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/derVJ.de-Landingpage-2.jpg"
          alt="Webseite von derVJ zeigt den Bildschirm einer Kamera mit Moderatorin vor GreenScreen Hintergrund."
        />
      </div>
    </div>
  );
}
