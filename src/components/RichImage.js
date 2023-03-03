import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const RichImage = ({ img, title }) => {
  return (
    <ImgContainer>
      <GatsbyImage imgClassName="image" image={img} alt={title} />
      <p className="title">{title}</p>
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  position: relative;
  background: transparent;
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: var(--darkShadow);
    margin: 2rem auto;
  }
  .title {
    font-size: 12px;
    position: absolute;
    left: 0;
    top: 85%;
    background: var(--primaryColor);
    color: var(--mainBlack);
    padding: 0 0.5rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  .title:before,
  .title:after {
    content: "";
    position: absolute;
  }
  .title:before {
    width: 7px;
    height: 100%;
    top: 0;
    left: -6.5px;
    padding: 0 0 7px;
    background: inherit;
    border-radius: 5px 0 0 5px;
  }
  .title:after {
    width: 5px;
    height: 5px;
    bottom: -5px;
    left: -4.5px;
    background: rgb(139, 69, 19);
    border-radius: 5px 0 0 5px;
  }

  @media screen and (min-width: 900px) {
    margin: 3rem;
    .title {
      font-size: 1rem;
      top: 90%;
    }
  }
`;


export default RichImage