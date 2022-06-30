import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../Hooks/Hooks.scss"
import back from "../../assets/Images/back.png";
import { NavLink } from 'react-router-dom';

export default function Hooks() {
  
  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("hooks").then((res) => setFlipCard(res.data));
    // console.log(res);
  }, []);
  

  const flip = (id) => {
    const filterId = flashcards.filter((item) => item.id === id);

    const updatedFilterId = {
      ...filterId[0],
      flipped: !filterId[0].flipped,
    };

    const filterFlipped = flashcards.filter((item) => item.id !== id);

    filterFlipped.push(updatedFilterId);
    filterFlipped.sort((a, b) => (a.id > b.id ? 1 : -1));
    setFlipCard(filterFlipped);
  };



  const [colorRed, setColorRed] = useState(false);

  const handleClick = e => {
    setColorRed(current => !current);
  };

  const [colorGreen, setColorGreen] = useState(false);

  const handleChange = e => {
    setColorGreen(current => !current);
  };


  return (
    <section className="hooks">
      <div className="hooks__back-divider">
        <NavLink to="/react">
          <img className="hooks__back" src={back} alt="Back Arrow" />
        </NavLink>
      </div>

      <div className="hooks__card-divider">
        {flashcards.map((card) => {
          return (
            <div
              className={`hooks__card-container ${
                card.flipped ? "hooks__flip-card" : ""
              } `}
            >
              <div
                onClick={() => flip(card.id)}
                
                className={`hooks__card ${colorRed ? 'hooks__incorrect-background' : ''} ${colorGreen ? 'hooks__correct-background' : ''}`}
                key={card.id}
              >
                <p>{card.flipped ? card.answer : card.questions}</p>
                
              <div className="hooks__select-container">
                <p  className="hooks__correct" onClick={handleChange}>Correct</p>
                <p className="hooks__incorrect" onClick={handleClick}>Incorrect</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
