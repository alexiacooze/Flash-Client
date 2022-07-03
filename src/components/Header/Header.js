import { NavLink } from "react-router-dom";
import React from "react";
import "../Header/Header.scss";
import logo from "../../assets/Images/FLASH.png";

export default function Header() {
  return (
    <section>
      <header className="header">
        <div className="header__container">
          <div className="header__logo-container">
            <NavLink to="/home">
              <img className="header__logo" src={logo} alt="Page Logo" />
            </NavLink>
          </div>
          <nav className="header__nav-container">
            <ul className="header__menu">
              <NavLink
                className="header__link"
                to="/home"
                style={{ textDecoration: "none" }}
              >
                <li className="header__home">Home</li>
              </NavLink>
              <NavLink
                className="header__link"
                to="/html"
                style={{ textDecoration: "none" }}
              >
                <li className="header__html">HTML + CSS</li>
              </NavLink>
              <NavLink
                className="header__link"
                to="/javascript"
                style={{ textDecoration: "none" }}
              >
                <li className="header__javascript">Javascript</li>
              </NavLink>
              <NavLink
                className="header__link"
                to="/react"
                style={{ textDecoration: "none" }}
              >
                <li className="header__react">React</li>
              </NavLink>
              <NavLink
                className="header__link"
                to="/contact"
                style={{ textDecoration: "none" }}
              >
                <li className="header__contact">Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
}
