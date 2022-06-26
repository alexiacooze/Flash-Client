import React from 'react'
import "../Hooks/Hooks.scss"
import back from "../../assets/Images/back.png";
import { NavLink } from 'react-router-dom';

export default function Hooks() {
  return (
    <section className="hooks">
    <NavLink to="/react">
      <img className="hooks__back" src={back} alt="Back Arrow" />
    </NavLink>
  </section>
  )
}
