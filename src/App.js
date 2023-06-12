import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Impressum from "./components/Impressum";
import Errorpage from "./components/Errorpage/Errorpage";

function App() {
  return (
    <div>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/*" element={<Errorpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
