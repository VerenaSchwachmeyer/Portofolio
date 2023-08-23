export default function Linov1() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h3 className="secondary">Linov</h3>
        <p className="slide1 secondary">
          I created this one-pager website for a talented 13-year old musician,
          singer, and songwriter.
        </p>
        <a
          href="https://www.linov-music.de"
          target="blank"
          rel="noreferrer"
          className="buttonLinks secondary"
          aria-label="Link to Linov Homepage"
        >
          Visit Website
        </a>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/Screenshot-Linov-1.png"
          alt="Linov Landing Page: background shows black-and-white photo with dark clouds."
        />
      </div>
    </div>
  );
}
