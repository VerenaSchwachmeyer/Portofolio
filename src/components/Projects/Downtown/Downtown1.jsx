export default function Downtown1() {
  return (
    <div className="project secondary" tabIndex="0">
      <div className="projectText">
        <h3 className="secondary">Downtown</h3>
        <p className="slide1 secondary">
          Downtown is a platform that provides an accessible, digital meet-up
          spot for people with Down syndrome.
        </p>
        <a
          href="https://frontend-downtown.vercel.app/"
          target="blank"
          rel="noreferrer"
          className="buttonLinks secondary"
          aria-label="Link to Downtown"
        >
          Visit Website
        </a>
      </div>
      <div className="poligon">
        <img
          className="projectScreenshot"
          src="/images/Downtown-Titelbild-2.jpg"
          alt="A group of 4 people with down syndrome are standing together and laughing."
        />
      </div>
    </div>
  );
}
