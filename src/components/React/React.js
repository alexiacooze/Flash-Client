import "../React/React.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <section className="category">
      <div className="category__main-container">
        <ul className="category__item-container">
          <NavLink to="/setup" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>React Setup</p>
            </li>
          </NavLink>
          <NavLink to="/state-props" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>State and Props</p>
            </li>
          </NavLink>
          <NavLink to="/hooks" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>Hooks</p>
            </li>
          </NavLink>
          <NavLink to="/routing" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>Routing</p>
            </li>
          </NavLink>
          <NavLink to="/conditionals" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>Conditonals and Rendering</p>
            </li>
          </NavLink>
          <NavLink to="/components" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>Components</p>
            </li>
          </NavLink>
          <NavLink to="/imports-exports" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>Module Imports and Exports</p>
            </li>
          </NavLink>
          <NavLink to="/api" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>API's and Promises</p>
            </li>
          </NavLink>
          <NavLink to="/terminal" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p>Terminal</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}
