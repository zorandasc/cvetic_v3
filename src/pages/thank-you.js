import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from "gatsby";
import Banner from "../components/Banner";

import { Seo, StayledHero} from "../components";

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "bouq.jpg" }) {
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

const thank = ({ data }) => {
  return (
    <>
      <StayledHero home="true" img={data.aboutBcg}>
        <Banner
          title="hvala vam na kontaktu"
          info="Vaš email je uspešno poslan."
        >
          <AniLink fade to="/gallery" className="btn-hero">
            galerija
          </AniLink>
        </Banner>
      </StayledHero>
    </>
  );
};

export default thank;

export const Head = () => <Seo title="Hvala Vam Na kontaktu" />;

