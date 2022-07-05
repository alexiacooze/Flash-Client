import "../React/React.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <section className="category">
      <div className="category__main-container">
        <ul className="category__item-container">
          <NavLink to="/setup" style={{ textDecoration: "none" }}>
            <li className="category__item ">
              <p className="category__name">React Setup</p>
            </li>
          </NavLink>
          <NavLink to="/state-props" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p className="category__name">State and Props</p>
            </li>
          </NavLink>
          <NavLink to="/hooks" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p className="category__name">Hooks</p>
            </li>
          </NavLink>
          <NavLink to="/routing" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p className="category__name">Routing</p>
            </li>
          </NavLink>
          <NavLink to="/conditionals" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p className="category__name">Conditonals and Rendering</p>
            </li>
          </NavLink>
          <NavLink to="/api" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p className="category__name"> API's and Promises</p>
            </li>
          </NavLink>
          <NavLink to="/terminal" style={{ textDecoration: "none" }}>
            <li className="category__item">
              <p className="category__name">Terminal and Git</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}
