import React from 'react'
import "../Routing/Routing.scss"
import { NavLink } from 'react-router-dom'
import back from "../../assets/Images/back.png";

export default function Routing() {
  return (
    <section className="routing">
      <NavLink to="/react">
        <img className="routing__back" src={back} alt="Back Arrow" />
      </NavLink>
    </section>
  )
}
