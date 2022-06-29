import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../ImportsAndExports/ImportsAndExports.scss";
import { NavLink } from "react-router-dom";
import back from "../../assets/Images/back.png";

export default function ImportsAndExports() {
  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("imports").then((res) => setFlipCard(res.data));
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

  return (
    <section className="imports">
      <div className="imports__back-divider">
        <NavLink to="/react">
          <img className="imports__back" src={back} alt="Back Arrow" />
        </NavLink>
      </div>

      <div className="imports__card-divider">
        {flashcards.map((card) => {
          return (
            <div
              className={`imports__card-container ${
                card.flipped ? "imports__flip-card" : ""
              } `}
            >
              <div
                onClick={() => flip(card.id)}
                className="imports__card"
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
