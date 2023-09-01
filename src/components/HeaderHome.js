import { slide as Menu } from "react-burger-menu";
import VSLogo from "./VSLogo";
import ScrollIntoView from "react-scroll-into-view";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "ENGLISH" },
  de: { nativeName: "DEUTSCH" },
};

export default function HeaderHome() {
  const { t, i18n } = useTranslation();

  return (
    <header className="headerHome">
      <VSLogo id="VSlogo-top" />

      <div className="headerMenu">
        <Menu right role="menu" aria-label="Menu" className="primary">
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                className="secondary mdl-button mdl-js-button mdl-button--raised"
                key={lng}
                style={{
                  margin: "8%",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
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
              <Trans i18nKey="services.heading"></Trans>
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#aboutme">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="aboutme.heading"></Trans>
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#techStack">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="techstack.heading"></Trans>
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#projects">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="projects.heading"></Trans>
            </button>
          </ScrollIntoView>

          <ScrollIntoView selector="#contact">
            <button
              id="menu-item"
              className="mdl-button mdl-js-button mdl-button--raised"
            >
              <Trans i18nKey="contact.heading"></Trans>
            </button>
          </ScrollIntoView>
        </Menu>

        <p id="menu">
          <Trans i18nKey="header.menu"></Trans>
        </p>
      </div>
    </header>
  );
}
