import React from 'react'
import "../ComponentsCategory/Components.scss"
import { NavLink } from 'react-router-dom'
import back from "../../assets/Images/back.png";

export default function Components() {
  return (
    <section className="components">
    <NavLink to="/react">
      <img className="components__back" src={back} alt="Back Arrow" />
    </NavLink>
  </section>
  )
}
