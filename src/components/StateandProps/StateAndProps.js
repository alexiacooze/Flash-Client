import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../StateandProps/StateAndProps.scss";
import { NavLink } from "react-router-dom";
import back from "../../assets/Images/back.png";

export default function StateAndProps() {
  // creating state for the flashcard toggle and calling the API

  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("state").then((res) => setFlipCard(res.data));
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
    <section className="state">
      <div className="state__top">
        <div className="state__back-divider">
          <NavLink to="/react">
            <img className="state__back" src={back} alt="Back Arrow" />
          </NavLink>
        </div>
        <div className="state__count-container">
          <p className="state__count-display">
            <span className="state__correct-modifier">Correct:</span>{" "}
            <span className="state__number-modifier">
              {count >= 0 ? count : false}
            </span>
            /27
          </p>
        </div>
        <div className="state__button-divider">
          <div className="state__floor-container">
            <span className="state__floor-1">
              {" "}
              {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
            </span>
            <span className="state__floor-2">
              {" "}
              {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
            </span>
            <span className="state__floor-3">
              {" "}
              {("0" + Math.floor((timer / 10) % 100)).slice(-2)}
            </span>
          </div>
          <button
            onClick={() => setActive(true)}
            className="state__start-button"
          >
            Start
          </button>
          <button
            onClick={() => setActive(false)}
            className="state__stop-button"
          >
            Stop
          </button>
          <button onClick={() => setTimer(0)} className="state__reset-button">
            Reset
          </button>
        </div>
      </div>

      <div className="state__card-divider">
        {flashcards.map((card) => {
          return (
            <>
              <div
                className={`state__card-container ${
                  card.flipped ? "state__flip-card" : ""
                } `}
              >
                <div
                  onClick={() => flip(card.id)}
                  // check cards.correct if it is true then evaluate if cards === correct, the value set within the onClick, if it is true then set the background color to the class of correct-background, if it is false then set the background color to class incorrect-background, if that is false then set to an empty string
                  className={`state__card ${
                    card.correct
                      ? card.correct === "correct"
                        ? "state__correct-background"
                        : "state__incorrect-background"
                      : ""
                  }  ${
                    card.correct
                      ? card.correct === "clear"
                        ? "state__clear-background"
                        : ""
                      : ""
                  } 
                  ${
                    card.correct
                      ? card.correct === "remove"
                        ? "state__clear-background"
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
                <div className="state__select-container">
                  <p
                    className="state__correct"
                    // correct is evaluated as a string within the ternary card.correct === "correct"
                    onClick={() => {
                      answer(card.id, "correct");
                      total();
                    }}
                  >
                    Correct
                  </p>
                  <p
                    className="state__remove"
                    // incorrect is not evaluated as correct is true, therefore "incorrect" is just a place holder. The placeholder only needs a truthy value in order for the ternary to work
                    onClick={() => {
                      answer(card.id, "remove");
                      decreaseTotal();
                    }}
                  >
                    Remove
                  </p>
                  <p
                    className="state__incorrect"
                    // incorrect is not evaluated as correct is true, therefore "incorrect" is just a place holder. The placeholder only needs a truthy value in order for the ternary to work
                    onClick={() => answer(card.id, "incorrect")}
                  >
                    Incorrect
                  </p>
                  <p
                    className="state__clear"
                    onClick={() => answer(card.id, "clear")}
                  >
                    Clear
                  </p>
                  <p
                    className="state__favorite"
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
