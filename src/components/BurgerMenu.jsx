import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/burger-menu.css";

export default function BurgerMenu() {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState("ENGLISH");
  const [burgermenuOpen, setBurgermenuOpen] = useState(false);

  const lngs = {
    en: { nativeName: "ENGLISH" },
    de: { nativeName: "DEUTSCH" },
  };

  const burgerMenuItems = [
    { name: t("services.heading"), path: "#services" },
    { name: t("aboutme.heading"), path: "#aboutme" },
    { name: t("techstack.heading"), path: "#techStack" },
    { name: t("projects.heading"), path: "#projects" },
    { name: t("contact.heading"), path: "#contact" },
  ];

  const toggleMenu = () => {
    setBurgermenuOpen(!burgermenuOpen);
  };

  const Scroll2Element = (e, selector) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <span
          className={
            burgermenuOpen
              ? "burgermenu-bars-container openedmenu"
              : "burgermenu-bars-container"
          }
        >
          <button
            className="burgermenu-button"
            aria-label="open menu"
            onClick={() => toggleMenu()}
          ></button>
          <span
            className={
              burgermenuOpen ? "burgermenu-bars cross-1" : "burgermenu-bars"
            }
            style={{ top: "0px" }}
          ></span>
          <span
            className={
              burgermenuOpen ? "burgermenu-bars cross-2" : "burgermenu-bars"
            }
            style={{ top: "40%" }}
          ></span>
          <span
            className={
              burgermenuOpen ? "burgermenu-bars cross-3" : "burgermenu-bars"
            }
            style={{ top: "80%" }}
          ></span>
          {/* {burgermenuOpen ? (
            <p className="instr openedmenu">Schliessen</p>
          ) : (
            <p className="instr">öffnen</p>
          )} */}
        </span>
      </div>
      <menu className={burgermenuOpen ? "burgermenu opened" : "burgermenu"}>
        {Object.keys(lngs).map((lng) => (
          <button
            className={
              language === lngs[lng].nativeName
                ? "lng secondary checked"
                : "lng secondary"
            }
            key={lng}
            style={{
              margin: "10px",
            }}
            type="submit"
            name={lngs[lng].nativeName}
            onClick={(e) => {
              i18n.changeLanguage(lng);
              setLanguage(e.target.name);
            }}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
        {burgerMenuItems &&
          burgerMenuItems.map((burgerItem, index) => {
            return (
              <li className="burgermenu-listItems" key={index}>
                <button onClick={(e) => Scroll2Element(e, burgerItem.path)}>
                  {burgerItem.name}
                </button>
              </li>
            );
          })}
      </menu>
      {burgermenuOpen && <div className="overlay"></div>}
    </div>
  );
}
