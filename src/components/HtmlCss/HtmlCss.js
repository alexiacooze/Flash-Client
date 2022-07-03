import "../HtmlCss/HtmlCss.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HtmlCss() {
  return (
    <section className="html-css">
      <div className="html-css__main-container">
        <ul className="html-css__item-container">
          <NavLink to="/html-basics" style={{ textDecoration: "none" }}>
            <li className="html-css__item ">
              <p className="html-css__name">HTML Basics</p>
            </li>
          </NavLink>
          <NavLink to="/elements-attributes" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">Elements and Attributes</p>
            </li>
          </NavLink>
          <NavLink to="/forms" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">HTML Forms</p>
            </li>
          </NavLink>
          <NavLink to="/advanced" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">HTML Advanced</p>
            </li>
          </NavLink>
          <NavLink to="/css" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">CSS </p>
            </li>
          </NavLink>
          <NavLink to="/responsive-design" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">Responsive Design</p>
            </li>
          </NavLink>
          <NavLink to="/sass" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">SASS</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}
