import React, { useState } from "react";
import styled from "styled-components";

const ContacForm = ({ className }) => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const { name, email, message } = state;

  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

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
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await response.json() : null;

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));

    e.preventDefault();
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
`;
