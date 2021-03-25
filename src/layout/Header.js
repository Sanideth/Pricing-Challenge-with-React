import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <h1 className="heading-primary u-mb-m">Our Pricing</h1>
          <div className="header__button-container">
            <span className="header__span-anually">Annually</span>
            <ThemeToggleButton />
            <span className="header__span-monthly">Monthly</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
