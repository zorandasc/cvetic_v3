import React from "react";
import { graphql } from "gatsby";

import { Seo, StayledHero2 } from "../components";
import Blogs from "../components/Blog/Blogs"

const Blog = ({ data }) => {
  return (
    <>
      <StayledHero2 img={data.blog}></StayledHero2>
      <Blogs></Blogs>
    </>
  );
};

export default Blog;

export const Head = () => <Seo title="Blog" />;

export const query = graphql`
  query {
    blog: file(relativePath: { eq: "bouq.jpg" }) {
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