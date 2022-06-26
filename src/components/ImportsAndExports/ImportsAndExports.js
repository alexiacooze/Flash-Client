import React from 'react'
import "../ImportsAndExports/ImportsAndExports.scss"
import { NavLink } from 'react-router-dom'
import back from "../../assets/Images/back.png";

export default function ImportsAndExports() {
  return (
    <section className="module">
    <NavLink to="/react">
      <img className="module__back" src={back} alt="Back Arrow" />
    </NavLink>
  </section>
  )
}
