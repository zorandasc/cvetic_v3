import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

const ContacForm = ({ className }) => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const { name, email, message } = state;

  const handleChange = (e) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  function sendPushNotificationHandler(name, email, message) {
    if (!name || !email || !message) return;
    fetch("http://localhost:5000/api/messages/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        dateTime: new Date().toLocaleString(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response.status);
        }
      })
      .catch((error) => {
        console.error("There was an error sending PushNotification!", error);
      });
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //posalji prvo netilfy
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response.status);
        }
        //Ako prodje netilfy, salji dalje pushonjiu
        sendPushNotificationHandler(name, email, message);
        return navigate("/thank-you/");
      })
      .catch((error) => {
        alert(
          "Žao nam je. degodila se greška prilikom slanja Vašeg mejla. Molimo Vas pokušajte kasnije."
        );
      });
  };

  return (
    <form name="contact" className={className} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Vaše ime</label>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id="name"
          className="formControl"
          placeholder="ime"
        ></input>
      </div>
      <div>
        <label htmlFor="email">Vaš email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          id="email"
          className="formControl"
          placeholder="email"
        ></input>
      </div>
      <div>
        <label htmlFor="message">Poruka</label>
        <textarea
          required
          name="message"
          value={message}
          onChange={handleChange}
          id="message"
          rows="10"
          className="formControl"
          placeholder="Pozdrav"
        ></textarea>
      </div>
      <div>
        <button type="submit" className="btn-primary">
          Pošalji
        </button>
      </div>
    </form>
  );
};

export default styled(ContacForm)`
  .formControl {
    background-color: var(--primaryColor);
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.7rem;
    border: none;
    box-shadow: var(--box-shadow);
  }
  .error {
    color: tomato;
    margin-left: 1rem;
    font-family: bold;
  }
`;
