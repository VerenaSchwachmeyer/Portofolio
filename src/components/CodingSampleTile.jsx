import { useTranslation } from "react-i18next";

export default function CodingSampleTile(project) {
  const { t } = useTranslation();

  return (
    <div className="cardContainer sample secondary" tabIndex="0">
      <div className="cardContainerContent">
        <h3 className="secondary">{project.name}</h3>
        <img className="screenshotSample" src={project.src} alt={project.alt} />
        <p className="projectCaption secondary">{project.caption}</p>
      </div>
      <div className="sampleLinkContainer" role="menu">
        <a
          href={project.linkSite}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          className="sampleLink buttonLinks secondary"
        >
          {t("Buttons.viewsampleapp")}
        </a>
        <a
          href={project.linkRepo}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          className="sampleLink buttonLinks secondary"
        >
          {t("Buttons.go2repo")}
        </a>
      </div>
    </div>
  );
}
