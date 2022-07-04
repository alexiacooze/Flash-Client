import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../Routing/Routing.scss";
import { NavLink } from "react-router-dom";
import back from "../../assets/Images/back.png";

export default function Routing() {
  const [flashcards, setFlipCard] = useState([]);

  useEffect(() => {
    CATEGORIES_API.getAll("routing").then((res) => setFlipCard(res.data));
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
    <section className="routing">
      <div className="routing__top">
        <div className="routing__back-divider">
          <NavLink to="/react">
            <img className="routing__back" src={back} alt="Back Arrow" />
          </NavLink>
        </div>
        <div className="routing__button-divider">
          <div className="routing__floor-container">
            <span className="routing__floor-1">
              {" "}
              {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
            </span>
            <span className="routing__floor-2">
              {" "}
              {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
            </span>
            <span className="routing__floor-3">
              {" "}
              {("0" + Math.floor((timer / 10) % 100)).slice(-2)}
            </span>
          </div>
          <button
            onClick={() => setActive(true)}
            className="routing__start-button"
          >
            Start
          </button>
          <button
            onClick={() => setActive(false)}
            className="routing__stop-button"
          >
            Stop
          </button>
          <button
            onClick={() => setTimer(0)}
            className="routing__reset-button"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="routing__card-divider">
        {flashcards.map((card) => {
          return (
            <div
              className={`routing__card-container ${
                card.flipped ? "routing__flip-card" : ""
              } `}
            >
              <div
                onClick={() => flip(card.id)}
                className="routing__card"
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
