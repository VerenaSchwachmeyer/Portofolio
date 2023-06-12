export default function LandingPage() {
  return (
    <div id="top" className="startpage">
      <div className="startImage">
        {/* <img id="logo" src="/images/VS_Logo.png"></img> */}
        <div className="startTextContainer">
          <h1 className="startText">
            {/* <VSLogo /> */}
            Verena Schwachmeyer
          </h1>

          <div className="wrapper">
            <h4 id="softwareDeveloper">Software Developer</h4>
          </div>
          {/* <button>Contact me</button> */}
        </div>
        <figcaption>Photo: Tobias Büchner | dervj.de</figcaption>
      </div>
    </div>
  );
}
