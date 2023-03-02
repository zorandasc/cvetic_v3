import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import BlogList from "./BlogList";

const getBlogs = graphql`
  query {
    blogCategories: allContentfulBlog(sort: { title: ASC }) {
      edges {
        node {
          contentful_id
          slug
          title
          snipet
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

const Blogs = () => {
  const data = useStaticQuery(getBlogs);
  return <BlogList data={data}></BlogList>;
};

export default Blogs;
