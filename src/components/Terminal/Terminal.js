import React from 'react'
import "../Terminal/Terminal.scss"
import back from "../../assets/Images/back.png";
import { NavLink } from "react-router-dom";

export default function Terminal() {
  return (
    <section className="terminal">
      <NavLink to="/react">
        <img className="terminal__back" src={back} alt="Back Arrow" />
      </NavLink>
    </section>
  )
}
