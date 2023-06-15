export default function CodingSampleTile(project) {
  return (
    <div className="cardContainer secondary" id="sample">
      <div className="cardContainerContent">
        <h3>{project.name}</h3>
        <img className="screenshotSample" src={project.src} alt={project.alt} />
        <p className="projectCaption">{project.caption}</p>
      </div>
      <div className="sampleButtonContainer">
        <button className="sampleButton">
          <a href={project.linkSite} target="_blank" rel="noreferrer">
            View Sample
          </a>
        </button>
        <button className="sampleButton">
          <a href={project.linkRepo} target="_blank" rel="noreferrer">
            Go to Repo
          </a>
        </button>
      </div>
    </div>
  );
}
