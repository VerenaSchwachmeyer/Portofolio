import { useTranslation } from "react-i18next";

export default function Linov1() {
  const { t } = useTranslation();
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h3 className="secondary">Linov</h3>
        <p className="slide1 secondary">{t("projects.linovtext")}</p>
        <a
          href="https://www.linov-music.de"
          target="blank"
          rel="noreferrer"
          className="buttonLinks secondary"
          aria-label="Link to Linov Website"
        >
          {t("Buttons.visitWebsite")}
        </a>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/Screenshot-Linov-1.webp"
          alt="Linov Landing Page: background shows dark clouds in black and white."
        />
      </div>
    </div>
  );
}
