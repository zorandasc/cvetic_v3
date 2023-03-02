import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"

import logo from "../images/logo.svg"

const NavBarMob = ({ className, openDrawer }) => {
  return (
    <div className={className}>
      <div className="ribbon">
        <div className="prvi">
          {/*
          <AniLink fade to="/" className="logo">
            <img src={logo} alt="svadbeni cvet"></img>
          </AniLink>
           */}
          <span className="ribbon2">
            <span>
              <AniLink fade to="/" aria-label="logo">
                <img src={logo} alt="" width="85.899" height="83.776"></img>
              </AniLink>
            </span>
          </span>
          <button
            onClick={openDrawer}
            className="openBtn"
            aria-label=" Open Menu Button"
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
      </div>
    </div>
  )
}

export default styled(NavBarMob)`
  //fiksna podloga od pocetka do kraja
  position: fixed;
  top: 1.2rem;
  left: 0;
  width: 100%;
  z-index: 400;

  //ribon duzine 92% podijeljen u tri dijela
  .ribbon {
    width: 85%;
    margin: 0 auto;
    background: transparent;
    position: relative;
  }
  //zuti krakici ispod ribona (upsravni dijelovi)
  .ribbon::before,
  .ribbon::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1em;
    border-style: solid;
    border-color: var(--primaryColor) transparent transparent transparent;
    z-index: 100;
  }
  .ribbon::before {
    left: 0;
    border-width: 1em 0 0 1em;
  }
  .ribbon::after {
    right: 0;
    border-width: 1em 1em 0 0;
  }
  //prvi dio ribona za logo
  .prvi {
    width: 100%;
    background: var(--mainWhite);
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.3rem 1rem;
    border-bottom: 0.1rem solid var(--primaryColor);
    box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.5);
  }
  //lievi bijeli zmijski krak
  .prvi::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    bottom: -1.2em;
    left: -2em;
    border: 1.5em solid var(--mainWhite);
    border-right-width: 1.5em;
    border-left-color: transparent;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  //desni bijeli zmijski krak
  .prvi::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    bottom: -1.2em;
    right: -2em;
    border: 1.5em solid var(--mainWhite);
    border-left-width: 1.5em;
    border-right-color: transparent;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.5);
  }
  //kurtali sam logo
  .logo {
    position: absolute;
    z-index: 200;
    left: 10%;
    top: -20%;
    padding: 0.6rem;
    padding-left: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--mainWhite);
    border-bottom: 0.1rem solid var(--primaryColor);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-left-radius: 6px;
    box-shadow: 15px 8px 6px -6px rgba(0, 0, 0, 0.5);
  }

  .logo:before {
    content: "";
    position: absolute;
  }

  .logo:before {
    height: 0;
    width: 0;
    right: -8px;
    top: -1px;
    border-bottom: 13px solid var(--primaryColor);
    border-right: 8px solid transparent;
  }

  .openBtn {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    background-image: linear-gradient(to bottom, #f7f7f7, var(--primaryColor));
    color: var(--mainBlack);
    width: 45px;
    height: 45px;
    position: relative;
    text-align: center;
    line-height: 45px;
    border-radius: 50%;
    box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
    outline: none;
    border: none;
  }

  .openBtn::before {
    content: "";
    display: block;
    background: transparent;
    border-top: 2px solid #ddd;
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    z-index: -1;
    border-radius: 50%;
    box-shadow: inset 0px 8px 48px #ddd;
  }

  @media screen and (min-width: 400px) {
    top: 1.5rem;
    .logo {
      transform: scale(1.2);
      top: -15%;
    }
    .logo:before {
      top: -1px;
      border-bottom: 18px solid var(--primaryColor);
    }
  }
  .ribbon2 {
    position: absolute;
    top: -1.8px;
    left: 15%;
  }

  .ribbon2 span {
    position: relative;
    display: block;
    text-align: center;
    background: var(--mainWhite);
    font-size: 14px;
    line-height: 1;
    padding: 0.6rem;
    padding-left: 0.8rem;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    width: 106px;
    box-shadow: 13px 8px 6px -6px rgba(0, 0, 0, 0.5);
    transform: scale(1.2);
  }
  .ribbon2 span a {
    outline: none;
  }

  .ribbon2 span:before,
  .ribbon2 span:after {
    position: absolute;
    content: "";
  }

  .ribbon2 span:before {
    height: 6px;
    width: 5px;
    left: 106px;
    top: 0;
    background: var(--mainWhite);
  }

  .ribbon2 span:after {
    height: 11px;
    width: 8px;
    left: 106px;
    top: 0;
    border-radius: 8px 8px 0 0;
    background: var(--primaryColor);
  }
`
