import React from "react";
import { Trans } from "react-i18next";

export default function AboutMe() {
  return (
    <>
      <section id="aboutme" className="primary">
        <div className="content">
          <h2 className="sectionTitle">
            <Trans i18nKey="aboutme.heading">About me</Trans>
          </h2>
          <div className="container4Logo">{/* <VSLogo /> */}</div>
          <div className="portrait-info">
            <img
              id="portrait"
              src="/images/Verena-Schwachmeyer-Icon-2.jpg"
              alt="Portrait of Verena Schwachmeyer"
              aria-label="Portrait of Verena wearing a dark blue shirt. Blond hair, blue eyes."
            />
            <p className="aboutmeText">
              <Trans i18nKey="aboutme.text"></Trans>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
