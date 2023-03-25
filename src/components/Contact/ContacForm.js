import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { TfiEmail } from "react-icons/tfi";

import sendPushNotificationHandler from "../../hooks/sendPushNotificationHandler";

const ContacForm = ({ className }) => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const { name, email, message } = state;

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    //posalji prvo netilfy
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => {
        //Ako prodje netilfy, salji dalje pushonjiu
        sendPushNotificationHandler(name, email, message);
        return navigate("/thank-you/");
      })
      .catch((error) => {
        console.log(error);
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
        <span className="emailIcon">
          <TfiEmail size="2em"></TfiEmail>
        </span>
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
    border-radius: 10px;
  }
  .error {
    color: tomato;
    margin-left: 1rem;
    font-family: bold;
  }
  .emailIcon {
    box-shadow: var(--lightShadow);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid var(--mainWhite);
    border-radius: 50%;
    background: var(--mainWhite);
    top: -55px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;
