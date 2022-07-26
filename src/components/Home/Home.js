import React from "react";
import "../Home/Home.scss";
import hero from "../../assets/Images/study.jpg";

export default function Home() {
  return (
    <section className="home">
      <div className="home__hero-container">
        <div className="home__image-container">
          <img className="home__image" src={hero} alt="Hero Header" />
        </div>
        <div className="home__paragraphs-container">
          <p className="home__slogan">Learn Anytime, Anywhere.</p>
          <p className="home__intro-paragraph">
            {" "}
            Pre-generated flashcard style quizzes, to help during life's busy
            moments.{" "}
          </p>
        </div>
      </div>

      <div className="home__container">
        <div>
          <p className="home__info-1">Frontend focused!</p>
          <p className="home__info-2">Over 200 different React questions!</p>
          <p className="home__info-3">
            Options to sort by selecting incorrect or correct!{" "}
          </p>
          <p className="home__info-4">
            BONUS: An additional 300+ HTML+CSS and Javascript flashcard
            questions!
          </p>
        </div>
        <div>
          <p className="home__quote-1">
            {" "}
            Includes all of the study sets required to prepare for your
            interviews, or simply to just review front-end content.{" "}
          </p>
          <p className="home__quote-2">
            {" "}
            React is the core of creating interactive and unique applications.
            The study set includes all core React concepts.{" "}
          </p>
          <p className="home__quote-3">
            Understand the general concepts. The evaluation is up to your own
            discretion!{" "}
          </p>
          <p className="home__quote-4">
            {" "}
            Build and strength the core knowledge of front-end design. Strong
            foundational knowledge is essential!
          </p>
        </div>
      </div>
    </section>
  );
}
