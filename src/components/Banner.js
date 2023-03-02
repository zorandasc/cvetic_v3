import React from "react"
import styled from "styled-components"

const Banner = ({ className, title, info, children }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <i>
        <p>{info}</p>
      </i>
      {children}
    </div>
  )
}

export default styled(Banner)`
  margin: 4rem auto;
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);
  z-index: 3;
  position: absolute;
  h1 {
    font-size: 3rem;
    text-transform: capitalize;
    padding: 0 1rem;
    margin-bottom: 1rem;
    letter-spacing: 12px;
  }

  p {
    font-size: 14px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 450px) {
    h1 {
      font-size: 4rem;
      letter-spacing: 16px;
    }
    p {
      width: 85%;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    p {
      width: 70%;
      margin-bottom: 4rem;
    }
  }
  @media screen and (min-width: 1400px) {
    margin-top: 1rem;
    margin-bottom: 8rem;
  }
`
