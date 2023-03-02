import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import links from "../constants/links"
import socialLinks from "../constants/socialIcons"
import policyLinks from "../constants/policyLinks"


const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="links">
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.label}
            </AniLink>
          )
        })}
      </div>
      <div className="links">
        {policyLinks.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path} className="policy">
              {item.label}
            </AniLink>
          )
        })}
      </div>
      <div className="icons">
        {socialLinks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              className={`${item.label} socialIcon`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="social link"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className="copyright">
        copyright &copy; Svadbeni cvet {new Date().getFullYear()} all rights
        reserved
      </div>
    </div>
  )
}

export default styled(Footer)`
  margin-top: auto;
  background: var(--mainBlack);
  color: var(--primaryColor);
  text-align: center;
  padding: 2rem;


.links {
  margin-top:2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.links a {
  display: inline-block;
  text-decoration: none;
  color: var(--primaryColor);
  margin: 0.5rem 1rem;
  letter-spacing: var(--mainSpacing);
  transition: var(--mainTransition);
}

.links a:hover {
  color: var(--mainWhite);
}

.policy {
  text-transform: capitalize;
}

.socialIcon {
  display: inline-flex;
  width: 40px;
  height: 40px;
  margin: 20px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  font-size: 16px;
  flex-shrink: 0;
  transition: var(--mainTransition);
}

.socialIcon:hover,
.socialIcon:focus {
  transform: scale(1.2);
}

.copyright {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  line-height: 2;
}

`
