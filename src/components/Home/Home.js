import React from 'react'
import "../Home/Home.scss"
import hero from "../../assets/Images/hero.png"

export default function Home() {
  return (
    <section className='home'>
      <div className='home__container'>
        <img className='home__image' src={hero} alt="Hero Header"/>
        
        <p className='home__intro'>Flash is a free online learning tool specifically curated for students, by students. If you're busy, and are looking for pre-generated que-card styled quiz's, look no further!  </p>
        <p className='home__info-1'>Frontend focused!</p>
        <p className='home__info-2'>Over 200 different React questions!</p>
        <p className='home__info-3'>Options to sort by selecting incorrect or correct! </p>
        <p className='home__info-4'>BONUS: An additional 300+ HTML + CSS and Javascript flashcard questions!</p>
      </div>
    </section>
  )
}
