import { Trans } from "react-i18next";

export default function Downtown1() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h3 className="secondary">
          <Trans i18nKey="projects.downtown1H3"></Trans>
        </h3>
        <p className="slide1 secondary">
          <Trans i18nKey="projects.downtown1text"></Trans>
        </p>
        {/* <a
          href="https://frontend-downtown.vercel.app/"
          target="blank"
          rel="noreferrer"
          className="buttonLinks secondary"
          aria-label="Link to Downtown"
        >
          Visit Website
        </a> */}
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/Downtown-Titelbild-2.jpg"
          alt="A group of 4 people with down syndrome are standing together and laughing."
        />
      </div>
    </div>
  );
}
