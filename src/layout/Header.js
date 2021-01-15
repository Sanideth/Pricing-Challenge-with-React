import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="heading-primary">Our Pricing</h1>
        <div className="button-container">
          <span className="header__span-anually">Anually</span>
          <ThemeToggleButton />
          <span className="header__span-monthly">Monthly</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
