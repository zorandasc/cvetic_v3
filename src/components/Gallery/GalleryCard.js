import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components";

const GalleryCard = ({ className, work }) => {
  const { slug, prefiks, category, heroImage } = work;
  let mainImage = getImage(heroImage);

  return (
    <AniLink fade className={className} to={`/gallery/${slug}`}>
    
      <div className="imgContainer">
        <GatsbyImage
          image={mainImage}
          className="img"
          alt="wedding category"
        ></GatsbyImage>
        <span className="link">istraži</span>
      </div>
      {prefiks === "Poklon" ? (
        <div className="ribbon-wrapper-1">
          <div className="ribbon-1">LIMITED</div>
        </div>
      ) : (
        <></>
      )}
      <h3 className="ribbon4">
        {prefiks} {category}
      </h3>
    
    </AniLink>
  );
};

export default styled(GalleryCard)`
  display: flex;
  flex-direction: column;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  position: relative;
  border-radius: 10px;

  &:hover {
    box-shadow: var(--darkShadow);
  }

  .imgContainer {
    overflow: hidden;
    border-radius: 10px;
    flex: 1 1 auto;
    position: relative;
    transition: var(--mainTransition);
    background: var(--mainBlack);
  }
  .img {
    width: 100%;
    height: 100%;
    transition: var(--mainTransition);
  }

  .imgContainer:hover .img {
    filter: blur(5px);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    background: var(--mainBlack);
    color: var(--primaryColor);
    border: 2px solid var(--mainBlack);
    border-radius: 50px;
    padding: 0.5rem 0.7rem;
    transition: var(--mainTransition);
    display: inline-block;
  }

  .imgContainer:hover .link {
    opacity: 0.8;
  }

  .ribbon-wrapper-1 {
    width: 106px;
    height: 108px;
    overflow: hidden;
    position: absolute;
    top: -6px;
    right: -6px;
  }

  .ribbon-1 {
    font-size: 15px;
    font-weight: bold;
    line-height: 18px;
    letter-spacing: var(--mainSpacing);
    color: #333;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    position: relative;
    padding: 7px 0;
    left: -11px;
    top: 26px;
    width: 150px;
    background-color: #c1445a;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.5px;
  }

  .ribbon-1:before,
  .ribbon-1:after {
    content: "";
    border-top: 4px solid #843047;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    position: absolute;
    bottom: -4px;
  }

  .ribbon-1:before {
    left: 0;
  }

  .ribbon-1:after {
    right: 0;
  }

  .ribbon4 {
    font-size: 1.3rem;
    color: var(--mainBlack);
    position: absolute;
    top: 65%;
    width: 13rem;
    height: 6rem;
    padding: 10px 10px;
    background: linear-gradient(#dfbd69, #926f34);
    box-shadow: var(--darkShadow);
    border-bottom-right-radius: 3rem;
  }
  .ribbon4:before,
  .ribbon4:after {
    content: "";
    position: absolute;
  }
  .ribbon4:before {
    width: 7px;
    height: 100%;
    top: 0;
    left: -6.5px;
    padding: 0 0 7px;
    background: inherit;
    border-radius: 5px 0 0 5px;
  }
  .ribbon4:after {
    width: 5px;
    height: 5px;
    bottom: -5px;
    left: -4.5px;
    background: rgb(139, 69, 19);
    border-radius: 5px 0 0 5px;
  }

  @media screen and (min-width: 350px) {
    .ribbon4 {
      width: 14rem;
      font-size: 1.5rem;
      top: 70%;
    }
  }

  @media screen and (min-width: 900px) {
    .ribbon4 {
      width: 17rem;
      font-size: 1.8rem;
    }
  }
`;
