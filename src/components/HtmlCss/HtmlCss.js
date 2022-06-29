import "../HtmlCss/HtmlCss.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HtmlCss() {
  return (
    <section className="html-css">
      
      <div className="html-css__main-container">
        <ul className="html-css__item-container">
          <NavLink to="/setup" style={{ textDecoration: "none" }}>
            <li className="html-css__item ">
              <p className="html-css__name">React Setup</p>
            </li>
          </NavLink>
          <NavLink to="/state-props" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">State and Props</p>
            </li>
          </NavLink>
          <NavLink to="/hooks" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">Hooks</p>
            </li>
          </NavLink>
          <NavLink to="/routing" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">Routing</p>
            </li>
          </NavLink>
          <NavLink to="/conditionals" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">Conditonals and Rendering</p>
            </li>
          </NavLink>
          <NavLink to="/api" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name"> API's and Promises</p>
            </li>
          </NavLink>
          <NavLink to="/terminal" style={{ textDecoration: "none" }}>
            <li className="html-css__item">
              <p className="html-css__name">Terminal and Git</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}
