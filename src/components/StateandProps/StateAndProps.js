import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../StateandProps/StateAndProps.scss";
import { NavLink } from "react-router-dom";
import back from "../../assets/Images/back.png";

export default function StateAndProps() {
  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("state").then((res) => setFlipCard(res.data));
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

  return (
    <section className="state">
      <div className="state__top">
        <div className="state__back-divider">
          <NavLink to="/react">
            <img className="state__back" src={back} alt="Back Arrow" />
          </NavLink>
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
