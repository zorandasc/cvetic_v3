import React from "react";
import { graphql } from "gatsby";

import { Seo, StayledHero } from "../components";
import Blogs from "../components/Blog/Blogs"

const Blog = ({ data }) => {
  return (
    <>
      <StayledHero img={data.blog.childImageSharp.fluid}></StayledHero>
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
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;