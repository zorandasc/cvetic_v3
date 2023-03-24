import * as React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Seo, StayledHero2, Banner, Wave, Particle } from "../components";
import AboutHomy from "../components/Home/AboutHomy";
import FeaturedGalery from "../components/Home/FeaturedGalery";

const IndexPage = ({ data }) => {
  return (
    <>
      <StayledHero2 home="true" img={data.defaultBcg}>
        <Banner
          title="svadbeni cvet"
          info="Pridruži nam se i istraži čarobni svet svadbenih rukom pravljenih dekoracija i ukrasa"
        >
          <AniLink fade to="/gallery" className="btn-hero">
            galerija
          </AniLink>
        </Banner>
        <Wave></Wave>
        <Particle></Particle>
      </StayledHero2>
      <AboutHomy></AboutHomy>
      <FeaturedGalery></FeaturedGalery>
    </>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Početna" />;

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "marriage.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
