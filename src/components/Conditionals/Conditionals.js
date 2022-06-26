import React from 'react'
import "../Conditionals/Conditionals.scss"
import { NavLink } from 'react-router-dom'
import back from "../../assets/Images/back.png";

export default function Conditionals() {
  return (
    <section className="conditionals">
      <NavLink to="/react">
        <img className="conditionals__back" src={back} alt="Back Arrow" />
      </NavLink>
    </section>
  )
}
