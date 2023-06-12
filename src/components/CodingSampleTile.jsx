export default function CodingSampleTile(project) {
  return (
    <div className="cardContainer secondary" id="sample">
      <a href={project.link} target="_blank" rel="noreferrer">
        <h3>{project.name}</h3>
        <img
          className="screenshotSample"
          src={project.src}
          alt={project.alt}
          //   width="250rem"
          //   height="250rem"
        />
        <p className="projectCaption">{project.caption}</p>
      </a>
    </div>
  );
}
