import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../../utils/appConfig";
import "../Api/Api.scss";
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
    <section className="api">
      <div className="api__top">
        <div className="api__back-divider">
          <NavLink to="/react">
            <img className="api__back" src={back} alt="Back Arrow" />
          </NavLink>
        </div>
        <div className="api__button-divider">
          <div className="api__floor-container">
            <span className="api__floor-1">
              {" "}
              {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
            </span>
            <span className="api__floor-2">
              {" "}
              {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
            </span>
            <span className="api__floor-3">
              {" "}
              {("0" + Math.floor((timer / 10) % 100)).slice(-2)}
            </span>
          </div>
          <button
            onClick={() => setActive(true)}
            className="api__start-button"
          >
            Start
          </button>
          <button
            onClick={() => setActive(false)}
            className="api__stop-button"
          >
            Stop
          </button>
          <button
            onClick={() => setTimer(0)}
            className="api__reset-button"
          >
            Reset
          </button>
        </div>
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
