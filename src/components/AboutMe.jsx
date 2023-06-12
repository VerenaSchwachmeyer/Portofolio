import React from "react";
import { IconContext } from "react-icons";
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import VSLogo from "./VSLogo";

export default function AboutMe() {
  // const infos = [
  //   {
  //     id: "location",
  //     icon: <MdLocationPin />,
  //     text: "Berlin, Germany",
  //   },
  //   {
  //     id: "mail",
  //     icon: <MdMail />,
  //     text: (
  //       <Link className="link2Repo" to="/contact">
  //         verena.schwachmeyer@gmail.com
  //       </Link>
  //     ),
  //   },
  //   {
  //     id: "github",
  //     icon: (
  //       <a
  //         href="https://github.com/VerenaSchwachmeyer"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <FaGithub />
  //       </a>
  //     ),
  //     text: (
  //       <a
  //         className="link2Repo"
  //         href="https://github.com/VerenaSchwachmeyer"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         github.com/VerenaSchwachmeyer
  //       </a>
  //     ),
  //   },
  //   {
  //     id: "linkedin",
  //     icon: (
  //       <a
  //         href="https://de.linkedin.com/in/verena-schwachmeyer"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <FaLinkedin />
  //       </a>
  //     ),
  //     text: (
  //       <a
  //         className="link2Repo"
  //         href="https://de.linkedin.com/in/verena-schwachmeyer"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         linkedin.com/in/verena-schwachmeyer
  //       </a>
  //     ),
  //   },
  // ];

  // const infoItems = infos.map((info) => {
  //   return (
  //     <div className="info">
  //       <div className="icon">
  //         {info.link}
  //         <IconContext.Provider
  //           value={{
  //             size: "1.5em",
  //             className: "logos",
  //           }}
  //         >
  //           {info.icon}
  //         </IconContext.Provider>
  //       </div>
  //       <p>{info.text}</p>
  //     </div>
  //   );
  // });

  return (
    <>
      <section id="aboutme" className="aboutMe">
        <h2 className="sectionTitle">About me</h2>
        <div className="container4Logo">{/* <VSLogo /> */}</div>
        <div className="portrait-info">
          <img
            id="portrait"
            src="/images/VerenaSchwachmeyer.png"
            alt="Verena Schwachmeyer"
          />
          <p id="aboutmeText">
            Smart web solutions should have a simple and clear design for an
            optimal user experience - but with a differentiated, clean code in
            the background. <br></br>
            <br></br>
            My experience from my previous scientific work in clinical research,
            or as a physiotherapist, has taught me to work accordingly: Make it
            easy to understand for others but have a versatile skill set and
            expertise yourself.
          </p>
        </div>
        {/* <p id="traits">Versatile. Empathic. Solution-oriented.</p> */}
        {/* <div className="infoArea">{infoItems}</div> */}
        {/* <ul>
          <li>
            <strong>Versatility: </strong>
            <br></br>Coding, data analysis, direct customer contact, public
            speaking, consulting project partners, medical writing, etc etc.
            etc.
          </li>
          <li>
            <strong>Soft skills: </strong>
            <br></br>
            Critical self-reflexion and empathy for customers, project partners,
            team members, and oneself (!) are key to ANYTHING.
          </li>
          <li>
            <strong> Analytical, inductive thinking: </strong> <br></br>No
            wasting time with lamenting - instead understand the underlying
            problem and find a way to solve it.
          </li>
        </ul> */}
      </section>
    </>
  );
}
