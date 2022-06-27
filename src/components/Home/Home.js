import React from 'react'
import "../Home/Home.scss"
import hero from "../../assets/Images/hero.png"

export default function Home() {
  return (
    <section className='home'>
      <div className='home__container'>
        <img className='home__image' src={hero} alt="Hero Header"/>
        
        <p className='home__intro'>Flash is a free online learning tool specifically curated for students, by students. If you are busy, and are looking for pregenerated que-card styled quizes, look no further!  </p>
        <p className='home__info-1'>Over 100 different questions</p>
        <p className='home__info-2'>React framework specififc</p>
        <p className='home__info-3'>Hand select, or shuffle on demand </p>
        <p className='home__info-4'>Can be personalized</p>
      </div>
    </section>
  )
}
