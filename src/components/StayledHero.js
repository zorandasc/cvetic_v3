import React from "react";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const StayledHero = ({ home, img, children, className }) => {
  const image = getImage(img);
  const bgImage = convertToBgImage(image);
  return (
    <BackgroundImage
      Tag="section"
      home={home}
      {...bgImage}
      className={className}
    >
      {children}
    </BackgroundImage>
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
