import { slide as Menu } from "react-burger-menu";
import ScrollIntoView from "react-scroll-into-view";
import LandingPage from "./LandingPage";
import Services from "./Services";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Samples from "./Samples";
import Contact from "./Contact";
import Footer from "./Footer";
import VSLogo from "./VSLogo";

export default function Home() {
  return (
    <div>
      {/* <img
        className="homeLogoTop"
        src="/images/VS_Logo_w_code.png"
        height="40px"
        alt="Verenas Logo"
      ></img> */}
      <VSLogo id="VSlogo-top" />

      <Menu right>
        <ScrollIntoView selector="#services">
          <button
            id="menu-item"
            className="mdl-button mdl-js-button mdl-button--raised"
          >
            Services
          </button>
        </ScrollIntoView>
        <ScrollIntoView selector="#aboutme">
          <button
            id="menu-item"
            className="mdl-button mdl-js-button mdl-button--raised"
          >
            About Me
          </button>
        </ScrollIntoView>

        <ScrollIntoView selector="#techStack">
          <button
            id="menu-item"
            className="mdl-button mdl-js-button mdl-button--raised"
          >
            Tech Stack
          </button>
        </ScrollIntoView>

        <ScrollIntoView selector="#projects">
          <button
            id="menu-item"
            className="mdl-button mdl-js-button mdl-button--raised"
          >
            My Work
          </button>
        </ScrollIntoView>

        <ScrollIntoView selector="#contact">
          <button
            id="menu-item"
            className="mdl-button mdl-js-button mdl-button--raised"
          >
            Contact
          </button>
        </ScrollIntoView>
      </Menu>

      <LandingPage />
      <main>
        <Services />
        <AboutMe />
        <TechStack />
        <Projects />
        <Samples />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
