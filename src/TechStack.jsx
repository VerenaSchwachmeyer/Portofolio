import { IconContext } from "react-icons";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { DiVisualstudio } from "react-icons/di";
import { SiGimp } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import "react-tooltip/dist/react-tooltip.css";

function TechStack() {
  const logos = [
    { id: 1, name: "JavaScript", icon: <FaJs /> },
    { id: 2, name: "HTML5", icon: <FaHtml5 /> },
    { id: 3, name: "CSS3", icon: <FaCss3Alt /> },
    { id: 4, name: "React JS", icon: <FaReact /> },
    { id: 5, name: "Node JS", icon: <FaNodeJs /> },
    { id: 6, name: "Mongo DB", icon: <DiMongodb /> },
    { id: 7, name: "SQL", icon: <BsFiletypeSql /> },
    { id: 8, name: "git", icon: <FaGitSquare /> },
    { id: 9, name: "GitHub", icon: <FaGithub /> },
    {
      id: 10,
      name: "MATLAB",
      icon: <img src="/images/Matlab-Logo-bw.png" height="40em"></img>,
    },
    { id: 11, name: "Visual Studio Code", icon: <DiVisualstudio /> },
    { id: 12, name: "Gimp", icon: <SiGimp /> },
  ];

  const logoItems = logos.map((logo) => {
    return (
      <>
        <div
          id="logoTile"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={logo.name}
        >
          {logo.icon}
        </div>
        <Tooltip id="my-tooltip" />
      </>
    );
  });

  return (
    <section className="techStack">
      <h2 className="sectionTitle">Tech Stack</h2>
      <div className="logoList">
        <IconContext.Provider
          value={{
            size: "2.5em",
            className: "logos",
          }}
        >
          {logoItems}
        </IconContext.Provider>
      </div>
    </section>
  );
}

export default TechStack;
