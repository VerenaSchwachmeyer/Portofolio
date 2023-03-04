import React from "react";

function Footer() {
  return (
    <footer>
      <div className="colContainer">
        <div className="col1">
          <h4>What else to put here</h4>
        </div>
        <div className="col2">
          <h4>Navigation</h4>
          <a href="AboutMe">About Me</a>
          <a href="TechStack">Tech Stack</a>
          <a href="Projects">Projects</a>
        </div>
        <div className="col3">
          <h4>Contact</h4>
          <a href="">Mail</a>
        </div>
      </div>
      <p id="copyright">&copy; 2023 Copyright - Verena Schwachmeyer</p>
    </footer>
  );
}

export default Footer;
