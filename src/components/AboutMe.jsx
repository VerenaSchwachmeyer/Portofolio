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
              <Trans i18nKey="aboutme.text">
                I have worked in clinical research as a post-doctoral fellow for
                12 years before I decided to pursue my passion for coding as a
                web-developer. With my previous experience as a scientist and
                physiotherapist, I speak not only the language of "techies" but
                also physicians, therapists, nurses, and patients. But a medical
                topic of your project is not necessary - contact me for any
                subject matter.
              </Trans>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
