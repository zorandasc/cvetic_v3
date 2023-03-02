import React from "react";
import { graphql } from "gatsby";

import { Seo, StayledHero } from "../components";
import retro from "../images/retro_rose.svg";
import Gallerys from "../components/Gallery/Gallerys";

const Gallery = ({ data }) => {
  return (
    <>
      <StayledHero img={data.roses.childImageSharp.fluid}></StayledHero>
      <div
        style={{
          backgroundImage: `url(${retro})`,
          backgroundAttachment: "fixed",
          backgroundColor: `var(--mainWhite)`,
        }}
      >
        <Gallerys></Gallerys>
      </div>
    </>
  );
};

export default Gallery;

export const Head = () => <Seo title="Galerija" />;

export const query = graphql`
  query {
    roses: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
