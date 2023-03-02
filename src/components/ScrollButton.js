import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaArrowCircleUp } from "react-icons/fa"
import styled from "styled-components"

import { AppContext } from "../context"

const Button = styled.button`
  border: none;
  outline: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--primaryColor);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  opacity: ${props => (props.height ? "1" : "0")};
  transform:${props => (props.height ? "translateY(0)" : "translateY(-900%)")};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
  transition: all 500ms ease-in-out;
`

const ScrollButton = () => {
  const { height } = React.useContext(AppContext)
  return (
    <Button onClick={() => scrollTo("#header")} height={height > 4000}>
      <FaArrowCircleUp style={{
        color: "var(--mainBlack)",
        cursor: "pointer",
        fontSize: "2.3rem"
      }}></FaArrowCircleUp>
    </Button>

  )
}

export default ScrollButton
