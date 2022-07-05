import "../Javascript/Javascript.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Javascript() {
  return (
    <section className="javascript">
      <div className="javascript__main-container">
        <ul className="javascript__item-container">
          <NavLink to="/js-basic" style={{ textDecoration: "none" }}>
            <li className="javascript__item ">
              <p className="javascript__name">Basic Javascript</p>
            </li>
          </NavLink>
          <NavLink to="/dom" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name">DOM Manipulation</p>
            </li>
          </NavLink>
          <NavLink to="/es6" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name">ES6+</p>
            </li>
          </NavLink>
          <NavLink to="/js-advanced" style={{ textDecoration: "none" }}>
            <li className="javascript__item">
              <p className="javascript__name">Advanced Javascript</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}
