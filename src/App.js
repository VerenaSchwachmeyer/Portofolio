import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Errorpage404 from "./components/Errorpage/Errorpage404";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/*" element={<Errorpage404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
