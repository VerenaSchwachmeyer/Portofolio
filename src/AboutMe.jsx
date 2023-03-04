import React from "react";
import { IconContext } from "react-icons";
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function AboutMe() {
  const infos = [
    {
      id: "location",
      icon: <MdLocationPin />,
      text: "Berlin, Germany",
    },
    {
      id: "mail",
      icon: <MdMail />,
      text: "verena.schwachmeyer@gmail.com",
    },
    {
      id: "github",
      icon: (
        <a href="https://github.com/VerenaSchwachmeyer" target="_blank">
          <FaGithub />
        </a>
      ),
      text: "github.com/VerenaSchwachmeyer",
    },
    {
      id: "linkedin",
      icon: (
        <a
          href="https://de.linkedin.com/in/verena-schwachmeyer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      ),
      text: "linkedin.com/in/verena-schwachmeyer",
    },
  ];

  const infoItems = infos.map((info) => {
    return (
      <div className="info">
        <div className="icon">
          {info.link}
          <IconContext.Provider
            value={{
              size: "1.5em",
              className: "logos",
            }}
          >
            {info.icon}
          </IconContext.Provider>
        </div>
        <p>{info.text}</p>
      </div>
    );
  });

  return (
    <section className="aboutMe">
      <h2 className="sectionTitle">About me</h2>

      <div className="portrait-info">
        <img
          id="portrait"
          src="/images/VerenaSchwachmeyer.png"
          alt="Photo of Verena"
        />
        <div className="infoArea">{infoItems}</div>
      </div>
      <p id="traits">Versatile. Empathic. Solution-oriented.</p>
      <p>
        My journey through physiotherapy, sports science, biomechanics, academia{" "}
        <br></br> over to software development taught me a variety of skills and
        traits:
      </p>
      <ul>
        <li>
          <strong>Versatility: </strong>
          <br></br>Coding, data analysis, direct customer contact, public
          speaking, consulting project partners, medical writing, etc etc. etc.
        </li>
        <li>
          <strong>Soft skills: </strong>
          <br></br>
          Critical self-reflexion and empathy for customers, project partners,
          team members, and oneself (!) are key to ANYTHING.
        </li>
        <li>
          <strong> Analytical, inductive thinking: </strong> <br></br>No wasting
          time with lamenting - instead understand the underlying problem and
          find a way to solve it.
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
