import React from 'react'
import "../Api/Api.scss"
import back from "../../assets/Images/back.png";
import { NavLink } from "react-router-dom";

export default function Api() {
  return (
    <section className="setup">
    <NavLink to="/react">
      <img className="setup__back" src={back} alt="Back Arrow" />
    </NavLink>
  </section>
  )
}
