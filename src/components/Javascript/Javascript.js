import "../Javascript/Javascript.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Javascript() {
  return (
    <section className="javascript">
      
      <div className="javascript__main-container">
        <ul className="javascript__item-container">
          <NavLink to="/setup" style={{ textDecoration: "none" }}>
            <li className="javascript__item ">
              <p className="javascript__name">React Setup</p>
            </li>
          </NavLink>
          <NavLink to="/state-props" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name">State and Props</p>
            </li>
          </NavLink>
          <NavLink to="/hooks" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name">Hooks</p>
            </li>
          </NavLink>
          <NavLink to="/routing" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name">Routing</p>
            </li>
          </NavLink>
          <NavLink to="/conditionals" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name">Conditonals and Rendering</p>
            </li>
          </NavLink>
          <NavLink to="/api" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name"> API's and Promises</p>
            </li>
          </NavLink>
          <NavLink to="/terminal" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name">Terminal and Git</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}
