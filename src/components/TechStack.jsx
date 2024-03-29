import { IconContext } from "react-icons";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import { DiVisualstudio } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiWebrtc } from "react-icons/si";
import { SiBootstrap, SiI18Next, SiNextdotjs, SiMui } from "react-icons/si";
import { useTranslation } from "react-i18next";
import "react-tooltip/dist/react-tooltip.css";

function TechStack() {
  const { t } = useTranslation();

  const logos = [
    { id: 1, name: "JavaScript", icon: <FaJs /> },
    { id: 2, name: "HTML5", icon: <FaHtml5 /> },
    { id: 3, name: "CSS3", icon: <FaCss3Alt /> },
    { id: 4, name: "React JS/ React Native", icon: <FaReact /> },
    { id: 5, name: "Next JS", icon: <SiNextdotjs /> },
    { id: 6, name: "Node JS", icon: <FaNode /> },
    { id: 7, name: "Mongo DB", icon: <DiMongodb /> },
    { id: 8, name: "PostGreSQL", icon: <SiPostgresql /> },
    { id: 9, name: "MySQL", icon: <GrMysql /> },
    {
      id: 10,
      name: "ExpressJS",
      icon: (
        <img
          src="/images/ExpressJS-Logo-color0.webp"
          height="40em"
          alt=""
        ></img>
      ),
    },
    { id: 11, name: "GitHub", icon: <FaGithub /> },
    {
      id: 12,
      name: "MATLAB",
      icon: (
        <img
          src="/images/Matlab-Logo-color0.webp"
          height="40em"
          width="auto"
          alt=""
        ></img>
      ),
    },
    { id: 13, name: "Visual Studio Code", icon: <DiVisualstudio /> },
    {
      id: 14,
      name: "git",
      icon: <FaGitSquare />,
    },
    { id: 15, name: "Material UI", icon: <SiMui /> },
    { id: 16, name: "Bootstrap", icon: <SiBootstrap /> },
    {
      id: 17,
      name: "i18next",
      icon: <SiI18Next />,
    },
    { id: 18, name: "WebRTC", icon: <SiWebrtc /> },
  ];

  const logoItems = logos.map((logo) => {
    return (
      <li
        key={logo.id}
        aria-label={logo.name}
        tabIndex="0"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={logo.name}
        className="logoListItems"
      >
        <Tooltip id="my-tooltip" className="secondary logoTile" />
        {logo.icon}
      </li>
    );
  });

  return (
    <section id="techStack" className="primary">
      <div className="content">
        <h2 className="sectionTitle">{t("techstack.heading")}</h2>
        <p className="aboutmeText">{t("techstack.text")}</p>
        <ul className="logoList" style={{ margin: "auto" }}>
          <IconContext.Provider
            value={{
              size: "2.5em",
              className: "logos graphics",
            }}
          >
            {logoItems}
          </IconContext.Provider>
        </ul>
      </div>
    </section>
  );
}

export default TechStack;
