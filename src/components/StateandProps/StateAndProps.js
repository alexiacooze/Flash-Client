import React from 'react'
import "../StateandProps/StateAndProps.scss"
import { NavLink } from 'react-router-dom'
import back from "../../assets/Images/back.png";

export default function StateAndProps() {
  return (
    <section className="state">
      <NavLink to="/react">
        <img className="state__back" src={back} alt="Back Arrow" />
      </NavLink>
    </section>
  )
}
