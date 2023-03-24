import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import decorheart from "../../images/decorheart.jpg";

const Reklama = () => {
  const [showReklama, setShowReklama] = React.useState(true);
  const handleReklamClick = () => setShowReklama(false);

  return (
    <Wrapper reklama={showReklama}>
      <a
        href="https://decorwood.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="decorwood"
      >
        <h2>Naši partneri</h2>
        <p className="heading">Decorwood</p>
        <p className="text">Dekorativni predmeti od drveta</p>
      </a>

      <button className="close" onClick={handleReklamClick}>
        <FaTimes></FaTimes>
      </button>
    </Wrapper>
  );
};

const Gradient = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  position: relative;
  border: 3px solid #918a8a;
  width: 60%;
  margin: 0 auto;
  position: relative;
  background: url(${decorheart});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: none;
  &::before {
    background-color: rgba(0, 0, 0, 0.2);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;
    width: 100%;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 17px;
    height: 17px;
    display: grid;
    color: #00aecd;
    background-color: whitesmoke;
  }
  h2 {
    position: absolute;
    left: 1rem;
    top: 0.2rem;
  }
  .heading {
    position: relative;
    z-index: 10;
    text-transform: uppercase;
    font-weight: bolder;
    padding-top: 2rem;
    margin-bottom: 0;
    font-size: 1.6rem;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
  }
  .text {
    position: relative;
    z-index: 10;
    font-weight: 600;
    font-size: 1.3rem;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
  }
  @media screen and (min-width: 968px) {
    ${(props) => (props.reklama ? `display:flex` : `display:none`)};
  }
`;

export default Reklama;
