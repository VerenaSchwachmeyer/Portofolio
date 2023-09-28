import { slide as Menu } from "react-burger-menu";
import VSLogo from "./VSLogo";
import ScrollIntoView from "react-scroll-into-view";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

const lngs = {
  en: { nativeName: "ENGLISH" },
  de: { nativeName: "DEUTSCH" },
};

export default function HeaderHome() {
  const [language, setLanguage] = useState("ENGLISH");
  const { i18n } = useTranslation();

  return (
    <header className="headerHome">
      <VSLogo id="VSlogo-top" />

      <div className="menuContainer">
        <p id="menu">
          <Trans i18nKey="header.menu"></Trans>
        </p>
        <Menu right role="menu" aria-label="Menu" className="primary">
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                className={
                  language === lngs[lng].nativeName
                    ? "secondary checked"
                    : "secondary"
                }
                key={lng}
                style={{
                  margin: "8%",
                }}
                type="submit"
                name={lngs[lng].nativeName}
                onClick={(e) => {
                  i18n.changeLanguage(lng);
                  setLanguage(e.target.name);
                }}
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
          <ScrollIntoView selector="#services">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="services.heading">Service</Trans>
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#aboutme">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="aboutme.heading">Über mich</Trans>
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#techStack">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="techstack.heading">Tech Stack</Trans>
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#projects">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="projects.heading">My Work</Trans>
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#contact">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="contact.heading">Kontakt</Trans>
            </button>
          </ScrollIntoView>
        </Menu>
      </div>
    </header>
  );
}
