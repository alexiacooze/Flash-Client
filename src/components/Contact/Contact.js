import "../Contact/Contact.scss";

import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__header">
        <h1 className="contact__header-title">Contact</h1>
      </div>
      <div className="contact__fields">
        <label className="contact__first-name">First Name</label>
        <input
          type="text"
          id="contactFirst"
          name="contactFirst"
          className="contact__input"
          placeholder="First Name"
        />
        <label className="contact__last-name">Last Name</label>
        <input
          type="text"
          id="contactLast"
          name="contactLast"
          className="contact__input"
          placeholder="Last Name"
        />
        <label className="contact__phone">Phone Number</label>
        <input
          type="text"
          id="contactPhone"
          name="contactPhone"
          className="contact__input"
          placeholder="Phone"
        />
        <label className="contact__email">Email Adress</label>
        <input
          type="text"
          id="contactEmail"
          name="contactEmail"
          className="contact__input"
          placeholder="Email Address"
        />
        <label className="contact__message">Message</label>
        <input
          type="text"
          id="contactMessage"
          name="contactMessage"
          className="contact__message-input"
          placeholder="Message"
        />
      </div>
      <div className="contact__button-container">

      <button className="contact__button">Send</button>
      </div>
    </section>
  );
}
