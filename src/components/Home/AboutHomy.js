import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from "gatsby-plugin-image";

import Title from "../Title";
import Reklama from "../Reklama";

const AboutHomy = () => {
  return (
    <SectionWrapper>
      <Title title="Nešto" subtitle="o nama"></Title>
      <div className="aboutCenter">
        <article className="aboutImg">
          <div className="imgContainer">
            <StaticImage
              src="../../images/band.jpg"
              alt="about picture"
              placeholder="blurred"
              layout="constrained"
              //width={200}
              //height={200}
            />
          </div>
        </article>
        <article className="aboutInfo">
          <h3>ko smo mi</h3>
          <p>
            Mi smo tim koji je u želji da iskaže svoju kreativnost otpočeo sa
            izradom <strong>svadbenih dekoracija</strong>.<br></br> Sada iza nas
            stoji višegodišnji rad sa velikim brojem uspešno pripremljenih{" "}
            <strong>cvetića za venčanja</strong>,...
          </p>
          <AniLink fade className="btn-primary" to="/about">
            pročitaj više
          </AniLink>
        </article>
      </div>
      <Reklama></Reklama>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  padding: 1rem 0 4rem 0;
  z-index: 2;
  background-color: var(--mainWhite);

  .aboutCenter {
    width: 80vw;
    margin: 0 auto;
  }
  .aboutImg {
    margin: 3rem 0;
    position: relative; /* OVO JE ZBOG DOLE ABSOUTE IVICE*/
  }
  .aboutImg div {
    box-shadow: var(--lightShadow);
  }

  .imgContainer::before {
    content: "";
    border: 3px solid var(--primaryColor);
    position: absolute;
    top: -16px;
    left: -16px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .aboutInfo {
    margin-top: 3rem;
    text-align: center;
  }
  .aboutInfo h3 {
    font-size: 1.7rem;
    text-transform: capitalize;
  }
  @media screen and (min-width: 968px) {
    padding: 4rem 0 4rem 0;
    .aboutCenter {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 5rem;
    }

    .aboutImg,
    .aboutInfo {
      margin: 0;
    }
    .aboutImg img {
      max-height: 500px;
    }
    .imgContainer {
      max-height: 500px;
    }
    .aboutInfo p {
      width: 100%;
      word-spacing: 0.2rem;
      line-height: 2rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .aboutCenter {
      grid-row-gap: 2rem;
      margin-bottom: 5rem;
      width: 95vw;
      max-width: 1170px;
    }
  }
`;

export default AboutHomy;
