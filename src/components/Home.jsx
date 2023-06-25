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
import Scroll2Top from "./Scroll2Top";
import SkipLink from "./SkipLink";

export default function Home() {
  return (
    <div>
      <Scroll2Top />
      <SkipLink />

      <VSLogo id="VSlogo-top" />

      <Menu right role="menu" aria-label="Menu">
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
      <main id="main">
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
