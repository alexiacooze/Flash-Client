import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../StateandProps/StateAndProps.scss"
import { NavLink } from 'react-router-dom'
import back from "../../assets/Images/back.png";

export default function StateAndProps() {

  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("react").then((res) => setFlipCard(res.data));
    
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

  return (<section className="state">
  <div className="state__back-divider">
  <NavLink to="/react">
    <img className="state__back" src={back} alt="Back Arrow" />
  </NavLink>
  </div>

  <div className="state__card-divider">
    {flashcards.map((card) => {
      return (
        <div
          className={`state__card-container ${
            card.flipped ? "state__flip-card" : ""
          } `}
        >
          <div
            onClick={() => flip(card.id)}
            className="state__card"
            key={card.id}
          >
            <p>{card.flipped ? card.answer : card.questions}</p>
          </div>
        </div>
      );
    })}
  </div>
</section>
);
}
