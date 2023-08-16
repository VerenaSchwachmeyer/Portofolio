import React from "react";
// import { IconContext } from "react-icons";
// import { MdLocationPin } from "react-icons/md";
// import { MdMail } from "react-icons/md";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import VSLogo from "./VSLogo";

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
      <section id="aboutme" className="primary">
        <div className="content">
          <h2 className="sectionTitle">About me</h2>
          <div className="container4Logo">{/* <VSLogo /> */}</div>
          <div className="portrait-info">
            <img
              id="portrait"
              src="/images/Verena-Schwachmeyer-Icon-2.jpg"
              alt="Portrait of Verena Schwachmeyer"
              aria-label="Portrait of Verena wearing a dark blue shirt. Blond hair, blue eyes."
            />
            <p className="aboutmeText">
              I have worked in clinical research as a post-doctoral fellow for
              12 years before I decided to pursue my passion for coding as a
              web-developer. With my previous experience as a scientist and
              physiotherapist, I speak not only the language of "techies" but
              also physicians, therapists, nurses, and patients. But a medical
              topic of your project is not necessary - contact me for any
              subject matter.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
