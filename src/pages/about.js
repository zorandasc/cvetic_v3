import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Seo, StayledHero2, Title } from "../components";

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "band.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

const About = ({ data }) => {
  return (
    <>
      <StayledHero2 img={data.aboutBcg}></StayledHero2>
      <SectionWrapper>
        <Title title="naša" subtitle="misija"></Title>
        <div className="aboutCenter">
          <article className="aboutInfo">
            <h3>ko smo mi</h3>
            <p>
              Mi smo tim koji je u želji da iskaže svoju kreativnost otpočeo sa
              izradom <strong>svadbenih dekoracija</strong>.
            </p>
            <p>
              Sada iza nas stoji višegodišnji rad sa velikim brojem uspešno
              pripremljenih <strong>cvetića za venčanja</strong>, poklona za
              goste, bidermajera, kutija za koverte i drugih unikatnih i ručno
              izrađenih detalja za venčanja.
            </p>
            <p>
              Sa nama možete ostvariti sve svoje želje. Vaši cvetići mogu biti
              personalizovani, elegantni, upečatljivi, raskošni, otmeni...
            </p>
          </article>
          <article className="aboutImg">
            <div className="imgContainer">
              <StaticImage
                src="../../images/about.jpg"
                alt="about picture"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
          </article>
          <article className="aboutInfo">
            <p>
              Ako želite tradicionalnu <strong>svadbu</strong>, tu su naši
              cvetići sa ruzmarinom, a ipak ako ste za nešto moderno u ponudi
              imao veliki broj personalizovanih cvetića.
            </p>
            <p>
              U našoj galeriji ćete svakako moći da vidite prezentaciju naših
              radova i sigurno ćete pronaći neke koji Vam se dopadaju.
            </p>
            <p>
              Prepustite se mašti i kontaktirajte nas da zajedno kreiramo
              dekoracije za Vaše savršeno <strong>venčanje</strong>.
            </p>
          </article>
          <article className="aboutImg item1">
            <div className="imgContainer">
              <StaticImage
                src="../../images/crkva.jpg"
                alt="churc picture"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
          </article>
          <article className="aboutInfo item2">
            <p>
              Naručenu robu šaljemo brzom poštom na teritoriji cele Srbije.
              Takođe, robu šaljemo i na teritoriji Balkana. Ostavljamo Vam i
              mogućnost ličnog preuzimanja.
            </p>
            <AniLink fade className="btn-primary" to="/contact">
              Kontakt
            </AniLink>
          </article>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;

export const Head = () => <Seo title="O Nama" />;

const SectionWrapper = styled.section`
  padding: 1rem 0 4rem 0;
  z-index: 2;
  background-color: var(--mainWhite);

  .aboutCenter {
    width: 80vw;
    margin: 0 auto;
  }

  .aboutInfo {
    margin-top: 3rem;
    text-align: center;
  }

  .aboutInfo h3 {
    font-size: 1.7rem;
    text-transform: capitalize;
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

  @media screen and (min-width: 968px) {
    padding: 4rem 0;

    .aboutCenter {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 5rem;
    }
    .item1 {
      grid-area: 2 / 1 / 2 / 2;
    }
    .item2 {
      padding: 1rem 3rem 0 3rem;
      grid-area: 3 / 1 / 3 / 3;
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
      margin-bottom: 4rem;
      width: 95vw;
      max-width: 1170px;
    }
  }
`;
