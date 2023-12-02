import React from "react";
import VSLogo from "./VSLogo";
import BurgerMenu from "./BurgerMenu";
import { useTranslation } from "react-i18next";
import "../styles/burger-menu.css";

export default function HeaderHome() {
  const { t } = useTranslation();

  return (
    <header className="headerHome">
      <VSLogo id="VSlogo-top" />

      <div className="menuContainer">
        <p id="menu" className="instr">
          {t("header.menu")}
        </p>
        <BurgerMenu />
      </div>
    </header>
  );
}
