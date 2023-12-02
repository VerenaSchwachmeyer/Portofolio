import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Errorpage404 from "./pages/Errorpage/Errorpage404";
import Datenschutz from "./pages/Datenschutz";
import "./styles/App.css";

function App() {
  // const { i18n } = useTranslation();

  return (
    <div>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/*" element={<Errorpage404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
