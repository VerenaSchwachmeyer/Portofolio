import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <section id="aboutme" className="primary">
        <div className="content">
          <h2 className="sectionTitle">{t("aboutme.heading")}</h2>
          <div className="container4Logo">{/* <VSLogo /> */}</div>
          <div className="portrait-info">
            <img
              id="portrait"
              src="/images/Verena-Schwachmeyer-Icon-2.webp"
              alt="Portrait of Verena Schwachmeyer"
              aria-label="Portrait of Verena wearing a dark blue shirt. Blond hair, blue eyes."
            />
            <p className="aboutmeText">{t("aboutme.text")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
