import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../JsAdvanced/JsAdvanced.scss";
import back from "../../assets/Images/back.png";
import { NavLink } from "react-router-dom";

// this is the first component that was worked on, hence the commenting only on this component
export default function JsAdvanced() {
  // creating state for the flashcard toggle and calling the API

  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("js-advanced").then((res) => setFlipCard(res.data));
    // console.log(res);
  }, []);

  // function for the flip of each individual card
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

  // function for the selected color change
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

  // creating a function for the stopwatch
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let timeChange = null;

    if (active) {
      timeChange = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
    } else {
      clearInterval(timeChange);
    }
    return () => clearInterval(timeChange);
  }, [active]);

  // creating a function to track the correct answers
  const [count, setCount] = useState(0);

  const total = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseTotal = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <section className="js-advanced">
      <div className="js-advanced__top">
        <div className="js-advanced__back-divider">
          <NavLink to="/html">
            <img className="js-advanced__back" src={back} alt="Back Arrow" />
          </NavLink>
        </div>
        <div className="js-advanced__count-container">
          <p className="js-advanced__count-display">
            <span className="js-advanced__correct-modifier">Correct:</span>{" "}
            <span className="js-advanced__number-modifier">{count >= 0 ? count : false}</span>/26
          </p>
        </div>
        <div className="js-advanced__button-divider">
          <div className="js-advanced__floor-container">
            <span className="js-advanced__floor-1">
              {" "}
              {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
            </span>
            <span className="js-advanced__floor-2">
              {" "}
              {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
            </span>
            <span className="js-advanced__floor-3">
              {" "}
              {("0" + Math.floor((timer / 10) % 100)).slice(-2)}
            </span>
          </div>
          <button
            onClick={() => setActive(true)}
            className="js-advanced__start-button"
          >
            Start
          </button>
          <button
            onClick={() => setActive(false)}
            className="js-advanced__stop-button"
          >
            Stop
          </button>
          <button
            onClick={() => setTimer(0)}
            className="js-advanced__reset-button"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="js-advanced__card-divider">
        {flashcards.map((card) => {
          return (
            <>
              <div
                className={`js-advanced__card-container ${
                  card.flipped ? "js-advanced__flip-card" : ""
                } `}
              >
                <div
                  onClick={() => flip(card.id)}
                  // check cards.correct if it is true then evaluate if cards === correct, the value set within the onClick, if it is true then set the background color to the class of correct-background, if it is false then set the background color to class incorrect-background, if that is false then set to an empty string
                  className={`js-advanced__card ${
                    card.correct
                      ? card.correct === "correct"
                        ? "js-advanced__correct-background"
                        : "js-advanced__incorrect-background"
                      : ""
                  }  ${
                    card.correct
                      ? card.correct === "clear"
                        ? "js-advanced__clear-background"
                        : ""
                      : ""
                  } 
                  ${
                    card.correct
                      ? card.correct === "remove"
                        ? "js-advanced__clear-background"
                        : ""
                      : ""
                  }
                  `}
                  key={card.id}
                >
                  <p>{card.flipped ? card.answer : card.questions}</p>
                </div>
              </div>
              {/*ternary is used to isolate the select options to only the back of the card*/}
              {card.flipped ? (
                <div className="js-advanced__select-container">
                  <p
                    className="js-advanced__correct"
                    // correct is evaluated as a string within the ternary card.correct === "correct"
                    onClick={() => {
                      answer(card.id, "correct"); total() 
                    }}
                  >
                    Correct
                  </p>
                  <p
                    className="js-advanced__remove"
                    // incorrect is not evaluated as correct is true, therefore "incorrect" is just a place holder. The placeholder only needs a truthy value in order for the ternary to work
                    onClick={() => {answer(card.id, "remove"); decreaseTotal()}}
                  >
                    Remove
                  </p>
                  <p
                    className="js-advanced__incorrect"
                    // incorrect is not evaluated as correct is true, therefore "incorrect" is just a place holder. The placeholder only needs a truthy value in order for the ternary to work
                    onClick={() => answer(card.id, "incorrect")}
                  >
                    Incorrect
                  </p>
                  <p
                    className="js-advanced__clear"
                    onClick={() => 
                      answer(card.id, "clear")}
                  >
                    Clear
                  </p>
                  <p
                    className="js-advanced__favorite"
                    onClick={() => answer(card.id, "favorite")}
                  ></p>
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
