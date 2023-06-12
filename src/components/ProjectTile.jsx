import React from "react";

function ProjectTile(project) {
  return (
    <div className="projectContainer secondary" id="project">
      <h3>{project.name}</h3>
      <div className="projectName">
        <p className="projectCaption">{project.caption}</p>
        {/* <img
          className="projectLogo"
          src={project.logo}
          alt={`${project.name} logo`}
          height="50px"
        ></img> */}
      </div>

      <img
        className="screenshotProject"
        src={project.src}
        alt={project.alt}
        width="600rem"
        height="400rem"
      />
    </div>
  );
}

export default ProjectTile;
