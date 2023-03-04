import "./App.css";
import Header from "./Header";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
