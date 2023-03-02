import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h2>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h2>
    </div>
  )
}

export default styled(Title)`
  text-transform: capitalize;
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  font-size: 2.3rem;
  h2 {
    text-align: center;
    letter-spacing: 6px;
    color: var(--primaryColor);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
  }
  .title {
    color: var(--mainBlack);
    text-shadow: none;
  }
  span {
    display: block;
  }

  @media screen and (min-width: 576px) {
    //text-transform: uppercase;
    span {
      padding-left: 1rem;
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
