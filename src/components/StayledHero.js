import React from "react";
import styled from "styled-components";
import BacgroundImage from "gatsby-background-image";

const StayledHero = ({ home, img, children, className }) => {
  return (
    <BacgroundImage Tag="section" home={home} fluid={img} className={className}>
      {children}
    </BacgroundImage>
  );
};

export default styled(StayledHero)`
  padding-top: 110px;
  min-height: ${(props) => (props.home ? "100vh" : "60vh")};
  background: ${(props) =>
    props.home ? "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7 ))" : "none"};
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 400px) {
    min-height: ${(props) => (props.home ? "100vh" : "65vh")};
  }

  @media screen and (min-width: 576px) {
    min-height: ${(props) => (props.home ? "100vh" : "75vh")};
  }
`;
