import React from "react";

function ProjectTile(project) {
  return (
    <div className="card">
      <h3>{project.name}</h3>
      <a href={project.link} target="_blank">
        {" "}
        <img
          className="screenshot"
          src={project.src}
          alt={project.alt}
          width="250rem"
          height="250rem"
        />
      </a>
      <p>{project.caption}</p>
    </div>
  );
}

export default ProjectTile;
