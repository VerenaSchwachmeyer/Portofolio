// import { slide as Menu } from "react-burger-menu";
// import ScrollIntoView from "react-scroll-into-view";
import LandingPage from "./LandingPage";
import Services from "../components/Services";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Samples from "../components/Samples";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Scroll2Top from "../components/Scroll2Top";
import SkipLink from "../components/SkipLink";

export default function Home() {
  return (
    <>
      <Scroll2Top />
      <SkipLink />

      <LandingPage />

      <main id="main" lang="en">
        <Services />
        <AboutMe />
        <TechStack />
        <Projects />
        <Samples />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
