// import { slide as Menu } from "react-burger-menu";
// import ScrollIntoView from "react-scroll-into-view";
import HeaderHome from "./HeaderHome";
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

      <HeaderHome />

      <LandingPage />
      <main id="main" lang="en">
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
