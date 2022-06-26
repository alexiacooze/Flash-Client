import React, { useState } from "react";
import "../Setup/Setup.scss";
import back from "../../assets/Images/back.png";
import { NavLink } from "react-router-dom";

export default function Setup() {
  const [flashcards] = useState([
    {
      id: 1,
      questions: "what is react",
      answer: "a framework",
    },

    {
      id: 2,
      questions: "Question 2",
      answer: " language",
    },
  ]);

  const [flipCard, setFlipCard] = useState(false)



  return (
    <section className="setup" >
      <NavLink to="/react">
        <img className="setup__back" src={back} alt="Back Arrow" />
      </NavLink>
      <div className={`setup__card-container ${flipCard ? 'setup__flip-card' : ''} `} onClick={() => setFlipCard(!flipCard)}>
        {flashcards.map((card) => {
          return (
            <div className="setup__card" key={card.id} >
              <p>{flipCard ? card.answer : card.questions}</p>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}
