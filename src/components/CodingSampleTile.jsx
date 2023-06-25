export default function CodingSampleTile(project) {
  return (
    <div className="cardContainer secondary" id="sample">
      <div className="cardContainerContent">
        <h3 className="secondary">{project.name}</h3>
        <img className="screenshotSample" src={project.src} alt={project.alt} />
        <p className="projectCaption secondary">{project.caption}</p>
      </div>
      <div className="sampleLinkContainer">
        <a
          href={project.linkSite}
          target="_blank"
          rel="noreferrer"
          className="sampleLink buttonLinks secondary"
        >
          View Sample App
        </a>
        <a
          href={project.linkRepo}
          target="_blank"
          rel="noreferrer"
          className="sampleLink buttonLinks secondary"
        >
          Go to Repo
        </a>
      </div>
    </div>
  );
}
