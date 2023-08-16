import { slide as Menu } from "react-burger-menu";
import VSLogo from "./VSLogo";
import ScrollIntoView from "react-scroll-into-view";

export default function HeaderHome() {
  return (
    <>
      <header className="headerHome">
        <VSLogo id="VSlogo-top" />
      </header>
      <div className="headerMenu">
        <Menu right role="menu" aria-label="Menu" className="primary">
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

        <p id="menu">Menu</p>
      </div>
    </>
  );
}
