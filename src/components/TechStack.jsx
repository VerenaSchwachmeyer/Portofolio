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
import { SiGimp } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiWebrtc } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import "react-tooltip/dist/react-tooltip.css";

function TechStack() {
  const logos = [
    { id: 1, name: "JavaScript", icon: <FaJs /> },
    { id: 2, name: "HTML5", icon: <FaHtml5 /> },
    { id: 3, name: "CSS3", icon: <FaCss3Alt /> },
    { id: 4, name: "React JS", icon: <FaReact /> },
    { id: 5, name: "Node JS", icon: <FaNode /> },
    { id: 6, name: "Mongo DB", icon: <DiMongodb /> },
    { id: 7, name: "PostGreSQL", icon: <SiPostgresql /> },
    { id: 8, name: "MySQL", icon: <GrMysql /> },
    {
      id: 9,
      name: "ExpressJS",
      icon: <img src="/images/ExpressJS-Logo1.png" height="40em" alt=""></img>,
    },
    { id: 10, name: "GitHub", icon: <FaGithub /> },
    {
      id: 11,
      name: "MATLAB",
      icon: (
        <img src="/images/Matlab-Logo-color-1.png" height="40em" alt=""></img>
      ),
    },
    { id: 12, name: "Visual Studio Code", icon: <DiVisualstudio /> },
    {
      id: 13,
      name: "git",
      icon: <FaGitSquare />,
    },
    { id: 14, name: "Material UI", icon: <SiMui /> },
    { id: 15, name: "WebRTC", icon: <SiWebrtc /> },
    { id: 16, name: "Bootstrap", icon: <SiBootstrap /> },
    // { id: 17, name: "Gimp", icon: <SiGimp /> },
  ];

  const logoItems = logos.map((logo) => {
    return (
      <li key={logo.id} aria-label={logo.name} tabIndex="0">
        <div
          id="logoTile"
          className="graphics"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={logo.name}
        >
          {logo.icon}
        </div>
        <Tooltip id="my-tooltip" className="secondary" />
      </li>
    );
  });

  return (
    <section id="techStack" className="primary">
      <div className="content">
        <h2 className="sectionTitle">Tech Stack</h2>
        <ul className="logoList">
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
