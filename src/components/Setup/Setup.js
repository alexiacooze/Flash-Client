import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../Setup/Setup.scss";
import back from "../../assets/Images/back.png";
import { NavLink } from "react-router-dom";

export default function Setup() {
  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("setup").then((res) => { setFlipCard(res.data); console.log(res)});
    
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

  return (
    <section className="setup">
      <div className="setup__back-divider">
        <NavLink to="/react">
          <img className="setup__back" src={back} alt="Back Arrow" />
        </NavLink>
      </div>

      <div className="setup__card-divider">
        {flashcards.map((card) => {
          return (
            <div
              className={`setup__card-container ${
                card.flipped ? "setup__flip-card" : ""
              } `}
            >
              <div
                onClick={() => flip(card.id)}
                className="setup__card"
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
