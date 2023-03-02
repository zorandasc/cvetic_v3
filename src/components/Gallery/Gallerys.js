import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import GalleryList from "./GalleryList";

const getWorks = graphql`
  query {
    workCategories: allContentfulWork(sort: { category: ASC }) {
      edges {
        node {
          contentful_id
          slug
          prefiks
          category
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

const Gallerys = () => {
  const data = useStaticQuery(getWorks);
  return <GalleryList data={data}></GalleryList>;
};

export default Gallerys;
