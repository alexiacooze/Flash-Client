import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../Hooks/Hooks.scss";
import back from "../../assets/Images/back.png";
import { NavLink } from "react-router-dom";

export default function Hooks() {
  // creating state for the flashcard toggle and calling the API

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

  const answer = (id, correct) => {
    // filtering the id from flashcard data and storing it within filterId
    const filterId = flashcards.filter((item) => item.id === id);

    // creating new object that takes filter id and stores it within the new object, sets the correct param to correct
    const updatedFilterId = {
      ...filterId[0],
      correct: correct,
    };

    // filtering the id and pushing the new filterFlipped into the updatedFilterId above
    const filterFlipped = flashcards.filter((item) => item.id !== id);

    filterFlipped.push(updatedFilterId);
    // sorting the filterFlipped and then setting the new state to the setFlipCard
    filterFlipped.sort((a, b) => (a.id > b.id ? 1 : -1));
    setFlipCard(filterFlipped);
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
            <>
              <div
                className={`hooks__card-container ${
                  card.flipped ? "hooks__flip-card" : ""
                } `}
              >
                <div
                  onClick={() => flip(card.id)}
                  // check cards.correct if it is true then evaluate if cards === correct, the value set within the onClick, if it is true then set the background color to the class of correct-background, if it is false then set the background color to class incorrect-background, if that is false then set to an empty string
                  className={`hooks__card ${card.correct ? card.correct === "correct" ? "hooks__correct-background"
                  : "hooks__incorrect-background"
                  : ""}  ${card.correct ? card.correct === "clear" ? "hooks__clear-background" : "" : ""} `}
                  key={card.id}
                >
                  <p>{card.flipped ? card.answer : card.questions}</p>
                </div>
              </div>
              {card.flipped ? (
                <div className="hooks__select-container">
                  <p
                    className="hooks__correct"
                    // correct is evaluated as a string within the ternary card.correct === "correct"
                    onClick={() => answer(card.id, "correct")}
                  >
                    Correct
                  </p>
                  <p
                    className="hooks__incorrect"
                    // incorrect is not evaluated as correct is true, therefore "incorrect" is just a place holder. The placeholder only needs a truthy value in order for the ternary to work
                    onClick={() => answer(card.id, "incorrect")}
                  >
                    Incorrect
                  </p>
                  <p className="hooks__clear" onClick={() => answer(card.id, "clear")}>Clear</p>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </section>
  );
}
