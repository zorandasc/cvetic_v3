import React from "react"
import styled from "styled-components"

const ContacForm = ({ className }) => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={className}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Vaše ime</label>
        <input
          required
          type="text"
          name="name"
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
          id="message"
          rows="10"
          className="formControl"
          placeholder="Pozdrav"
        ></textarea>
      </div>
      <div>
        <input type="submit" value="Pošalji" className="btn-primary"></input>
      </div>
    </form>
  )
}

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
`
