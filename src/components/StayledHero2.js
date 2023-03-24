import React from "react";
import styled from "styled-components";
import { /*StaticImage,*/ GatsbyImage, getImage } from "gatsby-plugin-image";

const StayledHero2 = ({ home, img, children }) => {
  let image = getImage(img);
  return (
    <Wrapper home={home}>
      <div className="bgWrap">
        <GatsbyImage
          alt="Hero Image"
          image={image}
          style={{ height: "100%", width: "100%" }}
        ></GatsbyImage>
        {/* 
        <StaticImage
          alt="Mountains"
          src="../images/marriage.jpg"
          placeholder="blurred"
          layout="fullWidth"
          objectFit="cover"
          style={{ height: "100%" }}
          backgroundColor="black"
        />
        */}
        {home && <Gradient />}
      </div>
      <div className="bgText">{children}</div>
    </Wrapper>
  );
};

const Gradient = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
`;

const Wrapper = styled.div`
  .bgWrap {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -10;
  }

  .bgText {
    position: relative;
    text-align: center;
    padding-top: 25vh;
    padding-bottom: ${(props) => (props.home ? "10vh" : "40vh")};
  }
  @media screen and (min-width: 1200px) {
    .bgText {
      padding-top: 30vh;
      padding-bottom: ${(props) => (props.home ? "25vh" : "45vh")};
    }
  }
`;

export default StayledHero2;
