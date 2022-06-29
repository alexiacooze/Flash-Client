import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../Api/Api.scss"
import back from "../../assets/Images/back.png";
import { NavLink } from "react-router-dom";

export default function Api() {
  
  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("api").then((res) => setFlipCard(res.data));
    
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
    <section className="api">
      <div className="api__back-divider">
        <NavLink to="/react">
          <img className="api__back" src={back} alt="Back Arrow" />
        </NavLink>
      </div>

      <div className="api__card-divider">
        {flashcards.map((card) => {
          return (
            <div
              className={`api__card-container ${
                card.flipped ? "api__flip-card" : ""
              } `}
            >
              <div
                onClick={() => flip(card.id)}
                className="api__card"
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
