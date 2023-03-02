import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import links from "../constants/links"
import socialLinks from "../constants/socialIcons"
import logo from "../images/logo.svg"

const NavBarDesk = ({ className }) => {
  return (
    <div className={className}>
      <div className="ribbon">
        <div className="prvi">
          <span className="ribbon2">
            <span>
              <AniLink fade to="/" aria-label="logo">
                <img src={logo} alt="" width="85.899" height="83.776"></img>
              </AniLink>
            </span>
          </span>
        </div>
        <nav>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink
                  fade
                  to={item.path}
                  className="navLink"
                  activeClassName="active"
                  aria-label={`${item.label}`}
                  partiallyActive={item.path !== "/" ? true : false}
                >
                  {item.label}
                </AniLink>
              </li>
            )
          })}
        </nav>
        <div className="treci">
          {socialLinks.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                className={`${item.label} socialIcon`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="socials links"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default styled(NavBarDesk)`
  //fiksna podloga od pocetka do kraja
  position: fixed;
  top: 1.6rem;
  left: 0;
  width: 100%;
  z-index: 10000;

  //ribon duzine 92% podijeljen u tri dijela
  .ribbon {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 92%;
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
    background: var(--mainWhite);
    position: relative;
    border-bottom: 0.2rem solid var(--primaryColor);
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
  //drugi dio ribona
  nav {
    position: relative;
    z-index: 2;
    display: flex;
  }

  //treci dio ribona za socijal
  .treci {
    position: relative;
    background: var(--mainWhite);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.5);
    border-bottom: 0.2rem solid var(--primaryColor);
  }

  //desni bijeli zmijski krak
  .treci::after {
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

  li {
    position: relative;
    list-style-type: none;
  }

  .navLink {
    cursor: pointer;
    position: relative;
    height: 3.3rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: var(--mainWhite);
    color: var(--mainBlack);
    text-transform: capitalize;
    letter-spacing: 1px;
    box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.5);
    border-bottom: 0.2rem solid var(--primaryColor);
    transition: all 0.2s;
  }

  .navLink:first-child {
    margin-left: 17px;
  }
  .navLink:last-child {
    margin-right: 17px;
  }

  .active,
  .navLink:hover {
    color: var(--primaryColor);
    margin-top: -10px;
    box-shadow: 0 4px 10px 0px #000;
    transition: all 0.2s;
  }

  //krilca za navlinkove
  .navLink:before,
  .navLink:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    background: inherit;
    border-bottom: 0.2rem solid var(--primaryColor);
    transition: all 0.2s;
  }

  .navLink:before {
    right: 100%;
  }

  .navLink:after {
    left: 100%;
  }

  .active:before,
  .active:after,
  .navLink:hover:before,
  .navLink:hover:after {
    height: 86%;
    background: #d7cfc2;
    transition: all 0.2s;
  }

  .active:before,
  .navLink:hover:before {
    transform: rotate(-30deg) skew(-30deg) translate(1.5px, 8px);
  }

  .active:after,
  .navLink:hover:after {
    transform: rotate(30deg) skew(30deg) translate(-1.5px, 8px);
  }

  .socialIcon {
    border-radius: 50%;
    color: #fff;
    width: 35px;
    height: 35px;
    margin: 0 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transition: var(--mainTransition);
  }

  .socialIcon:hover,
  .socialIcon:focus {
    transform: scale(1.2);
  }

  .logo {
    position: absolute;
    left: 20%;
    top: -5%;
    padding: 0.6rem;
    padding-left: 0.9rem;
    transform: scale(1.2);
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
    top: -1.5px;
    border-bottom: 14px solid var(--primaryColor);
    border-right: 8px solid transparent;
  }

  @media screen and (min-width: 1250px) {
    .navLink {
      width: 5rem;
    }
  }

  @media screen and (min-width: 1450px) {
    .logo {
      left: 30%;
      transform: scale(1.3);
    }
    .logo:before {
      border-bottom: 16px solid var(--primaryColor);
    }
    .navLink {
      width: 7rem;
      letter-spacing: var(--mainSpacing);
    }
  }

  @media screen and (min-width: 1550px) {
    .socialIcon {
      margin: 0 1rem;
      width: 40px;
      height: 40px;
    }
  }
  .ribbon2 {
    position: absolute;
    top: -1.8px;
    left: 25%;
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
