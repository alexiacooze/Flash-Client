import { NavLink } from "react-router-dom";
import React from "react";
import "../Header/Header.scss";
import logo from "../../assets/Images/logo.jpg";

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
              <NavLink
                className="header__link"
                to="/faq"
                style={{ textDecoration: "none" }}
              >
                <li className="header__faq">FAQ</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
}
